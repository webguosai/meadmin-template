import { VNode } from 'vue';
import { debounce } from 'lodash-es';
interface Label {
  value: string;
  label?: string;
  children: Label[];
}
export default (slot: () => VNode[]) => {
  const labels = [] as Label[];
  let needScreen = false;
  const checkedLabels = reactive(new Set<string>());
  const childrenKey = ref(Symbol());
  const getVNodes = (vNodes: VNode[], labels: Label[], parentId = '') => {
    const components = [] as VNode[];
    vNodes.forEach((vNode, index) => {
      if (needScreen) {
        if (!checkedLabels.has(parentId + '_' + index)) {
          return;
        }
      } else {
        labels[index] = {
          value: parentId + '_' + index,
          label: vNode.props?.label,
          children: [],
        };
        checkedLabels.add(parentId + '_' + index);
      }
      if (vNode.children && (vNode.children as Record<string, () => VNode[]>).default) {
        (vNode.children as Record<string, () => VNode[]>).default = getVNodes(
          (vNode.children as Record<string, () => VNode[]>).default(),
          labels[index].children,
          parentId + '_' + index,
        );
      }
      components.push(vNode);
    });
    return () => components;
  };
  const children = shallowRef(getVNodes(slot(), labels));
  watch(
    checkedLabels,
    debounce(() => {
      needScreen = true;
      children.value = getVNodes(slot(), labels);
    }, 500),
  );
  return { children, labels, checkedLabels };
};

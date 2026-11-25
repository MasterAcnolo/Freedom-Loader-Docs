import 'd3-transition';
import {enhance, init} from 'mermaid-diagram-pan-zoom';
import 'mermaid-diagram-pan-zoom/styles/mermaid-enhancements.css';

init({
  enableCopy: true,
  enableExpand: true,
  enableZoomControls: true,
  enableInlineWheelZoom: true,
  wheelZoomRequiresCtrl: true,
});

export function onRouteDidUpdate() {
  setTimeout(enhance, 100);
  setTimeout(enhance, 500);
  setTimeout(enhance, 1500);
  setTimeout(enhance, 3000);
}

// import React, { useState } from "react";
// // import { Diagram, Node, Port } from "react-diagrams";
// import Diagram from 'react-diagrams';

// const data = [
//     {
//         id: 1,
//         name: "CEO",
//         title: "Chief Executive Officer",
//         subordinates: [2, 3],
//     },
//     {
//         id: 2,
//         name: "COO",
//         title: "Chief Operating Officer",
//         subordinates: [4, 5],
//     },
//     {
//         id: 3,
//         name: "CFO",
//         title: "Chief Financial Officer",
//         subordinates: [],
//     },
//     {
//         id: 4,
//         name: "CTO",
//         title: "Chief Technology Officer",
//         subordinates: [],
//     },
//     {
//         id: 5,
//         name: "CMO",
//         title: "Chief Marketing Officer",
//         subordinates: [],
//     },
// ];

// function OrganizationChart() {
//     const [nodes, setNodes] = useState(data);

//     return (
//         <Diagram>
//             {nodes.map((node) => (
//                 <Node key={node.id}>
//                     <div className="node">
//                         {node.name}
//                         <br />
//                         {node.title}
//                     </div>
//                     {node.subordinates.map((subordinate) => (
//                         <Port key={subordinate}>
//                             <Node node={nodes.find((n) => n.id === subordinate)} />
//                         </Port>
//                     ))}
//                 </Node>
//             ))}
//         </Diagram>
//     );
// }

// export default OrganizationChart;
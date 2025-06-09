import { tester } from "CCT/tester.js";

/** @param {Array} data */
export function aJG2(data, ns) {
  const input = data;
  /*function dijkstra(graph) {
    const distances = {};
    const visited = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();

    for (const node in graph) {
      distances[node] = Infinity;
      visited[node] = false;
      previous[node] = null;
    }

    distances[0] = 0;
    priorityQueue.enqueue(0, 0);

    while (!priorityQueue.isEmpty()) {
      const current = priorityQueue.dequeue();
      const node = current.element;

      if (visited[node]) {
        continue;
      }

      visited[node] = true;

      for (const neighbor in graph[node]) {
        const distance = distances[node] + graph[node, [neighbor]];

        if (distance < distances[neighbor]) {
          //Orig: distance > distances[neighbor]
          distances[neighbor] = distance;
          previous[neighbor] = node;
          priorityQueue.enqueue(neighbor, distance);
        }
      }
    }

    return { distances, previous };
  }

  class PriorityQueue {
    constructor() {
      this.items = [];
    }

    enqueue(element, priority) {
      this.items.push({ element, priority });
      this.sort();
    }

    dequeue() {
      return this.items.shift();
    }

    isEmpty() {
      return this.items.length === 0;
    }

    sort() {
      this.items.sort((a, b) => a.priority - b.priority);
    }
  }*/
  /** @param {Array} graph */
  function srchBack(tgt) {
    if(input[0] == 0){
      return;
    }
    for (let i = 0; i < graph.length; i++) {
      for (let n = 1; n < graph[i].length; n++) {
        //let neighbors = graph[i][n];
        if (graph[i][n] == tgt) {
          jumps++;
          srchBack(i);
          return;
        }
        else{ jumps = 0; return; }
      }
    }
  }


  const graph = [];
  for (let i = 0; i < input.length; i++) {
    graph.push([i]);
    for (let n = 1; n <= input[i] && i + n < input.length; n++) {
      let neigh = i+n;
      //let jmp = n;
      graph[i].push(neigh);//graph[index].push({neigh, jmp});
      //ns.print(graph[i]); //Whole Index + neighbors
      //ns.print(graph[i][n]); //Index=0 others=neighbors
    }
    //ns.print(graph[i][0]); //Index only
  }
  let graphString = "";
  for (let index = 0; index < graph.length; index++) {
    graphString += `Index: ${graph[index][0]}\n`;
    for(let canJmp = 1; canJmp < graph[index].length; index++){
    graphString += `Can jump to: ${graph[index][canJmp]}\n`;
    }
    graphString += '\n';
  }
  ///////ns.print(graphString);
  /*testGraph = {'A': { 'B': 4, 'C': 2 },
  'B': { 'A': 4, 'D': 5 },
  'C': { 'A': 2, 'D': 1, 'E': 10 },
  'D': { 'B': 5, 'C': 1, 'E': 8 },
  'E': { 'C': 10, 'D': 8 }
};*/
  //[3,4,4,2,1,3,2,2,4]
  /*graph = 
    {0: {1:1, 2:2, 3:3},
    {1: {2:1,3:2,4:3,5:4},
    ...etc.
    }*/
  let jumps = 0;

  srchBack(input.length-1);
  //const result = dijkstra(input);

  //ns.print("Shortest distances from node A:", result.distances);
  // Expected output for testGraph: { A: 0, B: 4, C: 2, D: 3, E: 11 }

  // Expected putput for graph: {

  //ns.print("Previous nodes in shortest paths:", result.previous);
  // Expected output: { A: null, B: 'A', C: 'A', D: 'C', E: 'D' }

  return jumps;

}

/** @param {NS} ns */
export async function main(ns) {
  ns.ui.openTail();
  ns.disableLog('ALL');
  //ns.enableLog('arrJmpGm');
  const list = ns.ls("home", ".cct");
  let contractName = "";
  let contractInfo = "";
  let contractData = [];

  for (const i of list) {
    let info = ns.codingcontract.getContract(i);
    if (info.type == "Array Jumping Game II") {
      contractName = i;
      contractInfo = info.description;
      contractData = info.data;
    }
  }
  if (contractName == "") {
    const contract = tester(ns, "Array Jumping Game II");
    contractName = contract.contract;
    contractInfo = contract.contractInfo.description;
    contractData = contract.contractInfo.data;
  }
  const answer = aJG2(contractData, ns);
  //ns.print(contractInfo);
  ns.print(contractData);
  ns.print(answer);
  ns.alert(ns.codingcontract.attempt(answer, contractName));
}
// // timerWorker.js

// let intervalId;

// self.onmessage = function timerWorker(e) {
//   const { action, interval = 1000 } = e.data;
//   console.error('Log', 'timerWorker is called', e.data);

//   if (action === 'start') {
//     intervalId = setInterval(() => {
//       self.postMessage('tick');
//     }, interval);
//   } else if (action === 'stop') {
//     clearInterval(intervalId);
//   }
// };

// self.onerror = function (error) {
//   console.error('Log', 'Error in Web Worker:', error.message);
// };

// timerWorker.js

const workerCode = () => {
  let intervalId;
  self.addEventListener('message', ({ data }) => {
    const { action } = data;
    if (action === 'start') {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        self.postMessage('tick');
      }, 1000);
    } else if (action === 'stop') {
      clearInterval(intervalId);
    }
  });
};

let code = workerCode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

export default worker_script;

import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
let history
if (typeof document !== 'undefined') {
  history = createHistory()
} else {
  history = createMemoryHistory()
}

export default history
import { jobStore } from '../store/jobstore'

class workPrefsComponent {
    
/* *******************************************************
// investigate cases of checkboxes workplace and remote
**********************************************************/

 checkWorkplace(e) {
    //console.log(e.target.checked); //tells if the checkbox is selected or not
    if (e.target.checked) {// uncheck checkRemote
      jobStore.personUpdated.remote = false
    }
  }
   checkRemote(e) {
    if (e.target.checked) {
      jobStore.personUpdated.workplace = false
    }
  }
}
export default new workPrefsComponent()
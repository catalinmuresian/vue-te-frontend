//stores/users.js

import { defineStore } from 'pinia'
import jobService from '@/services/job.service'

// always rename the defineStore because it can cause disambiguity if names are the same
export const useJobStore = defineStore('jobs', {
  state: () => ({
    match_rates: null,
    personState: null,
    personUpdate: null,
    job: null,
  }),
  getters: {
    getMatchRates(state) {
      return state.match_rates
    },
    getPersonState(state) {
      return state.personState
    },
    getPersonUpdate(state) {
      return state.personState
    },
    getJob(state) {
      return state.job
    },
  },
  actions: {
    setJobSummaryData() {
      jobService
        .setJobSummaryData()
        .then((response) => {
          this.match_rates = response.data.all_job_match_rates
          this.personState = response.data.person
          // ** change all numeric values to true or false would make errors in id fields. Exclude these.
          // this results an array like ['nightshift_only', 0]
          Object.entries(this.personState).forEach((entry) => {
            if (entry[0] == 'user_id' || entry[0] == 'id') {
              return
            } else {
              this.personState[entry[0]] = entry[1] == 1 ? true : false
            }
          })
          this.personUpdate = JSON.parse(JSON.stringify(this.personState))
        })
        .catch((error) => {
          // TODO: make these generic for most requests
          alert('error in setJobSummaryData: '.error)
          if (error.toString().includes('Network Error')) {
            return 'Network error'
          } else if (error.toString().includes('401')) {
            return '401'
          } else {
            return error
          }
        })
    },
    setJob(id) {
      jobService
        .getJobDetails(id)
        .then((response) => {
          this.job = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    unsetJob() {
      this.job = null
      //also clear it from the cache
    },
  },
})

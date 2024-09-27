import { defineStore } from 'pinia';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {
      name: '',
      decisionType: '',
      partyType: '',
      cardNumber: 2,
      cardFields: [{ what: [], image: null }, { what: [], image: null }, { what: [], image: null }],
      decidingUser: 'ME',
      decidingUserName: '',
      userEmail: ''
    }
  }),
  actions: {
    setFormData(data) {
      this.formData = { ...this.formData, ...data }; 
    },
    updateField(field, value) {
      this.formData[field] = value;
    }
  }
});

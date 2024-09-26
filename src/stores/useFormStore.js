import { defineStore } from 'pinia';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {
      name: '',
      decisionType: '',
      specialPerson: '',
      personName: '',
      cardNumber: 2,
      cardFields: [{ what: [], image: null }, { what: [], image: null }, { what: [], image: null }],
      decidingUser: 'ME',
      decidingUserName: '',
      decidingUserEmail: ''
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

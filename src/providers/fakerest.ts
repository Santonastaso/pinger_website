import fakeRestDataProvider from "ra-data-fakerest";

const data = {
  projects: [
    { id: 1, name: "Scheduler", description: "Advanced scheduling system" },
    { id: 2, name: "CRM", description: "Customer relationship management" },
    { id: 3, name: "Tracciabilità", description: "Tracking and monitoring solution" },
    { id: 4, name: "Altro", description: "Additional projects and solutions" },
  ],
  contact: [
    { id: 1, email: "info@pingersoftware.it", phone: "+39 3318881201" },
  ],
};

export const dataProvider = fakeRestDataProvider(data);

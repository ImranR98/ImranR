//Model for the Contact object
export interface Contact {
    name: string;
    email: string;
    phones: [
        {
            type: string;
            countryCode: string;
            number: string;
        }
    ];
    links: [
        {
            name: string;
            url: string;
        }
    ];
}

//Model for the get Skills API responses
export interface ContactAPI {
    contact: Contact;
    errors: string[];
}
type Bill = {
    id: number;
    subscriber: string;
    services: string;
    total: number;
    status: string;
    date_at: string;
};
type Profile = {
    id: number;
    full_name: string;
    services: string;
    job_title: string;
    table_number: string;
    contact_information: string;
    status: string;
}

export type {Bill, Profile}
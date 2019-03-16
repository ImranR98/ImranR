//Model for a single Career entry
export interface CareerEntry {
    place: string;
    title: string;
    startDate: string;
    isCurrent: boolean;
    endDate: string;
    description: {
        descriptionText: string;
        descriptionPointSets: [
            {
                pointSetTitle: string;
                points: string[];
            }
        ];
    };
}

//Model for the get Education and get Experience API responses
export interface CareerAPI {
    entries: CareerEntry[];
    errors: [
        {
            entry: number;
            errors: string[];
        }
    ];
}
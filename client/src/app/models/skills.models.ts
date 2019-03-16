//Model for a single Skill entry
export interface Skill {
    skill: string;
}

//Model for the get Skills API responses
export interface SkillsAPI {
    entries: Skill[];
    errors: [
        {
            entry: number;
            errors: string[];
        }
    ];
}
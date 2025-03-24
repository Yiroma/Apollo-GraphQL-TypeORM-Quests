const PersonnageSchema = `
  type Personnage {
    id: ID
    name: String
    role: String
    short_description: String
  }
`;

const PersonnageInputSchema = `
  input PersonnageInput {
    name: String
    role: String
    short_description: String
  }
`;

export { PersonnageSchema, PersonnageInputSchema };

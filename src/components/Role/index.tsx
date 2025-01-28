type RoleProps = {
  value: string;
};

export function Role({ value }: RoleProps) {
  if (value === 'president') {
    return 'Presidente';
  }

  if (value === 'vicePresident') {
    return 'Vice-presidente';
  }

  if (value === 'senior') {
    return 'Perito';
  }

  return 'Integrante';
}

import yaml
from people import people

with open('people.yaml', 'w') as people_yaml:
	yaml.safe_dump(people, people_yaml)

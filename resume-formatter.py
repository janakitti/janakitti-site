import json

resume = {'projects': [], 'experiences': []}

file = open('resume-text.txt', 'r')

while True:
  line = file.readline().replace("\n", "")
  if line == '#Project':
    project = {'title': '',
               'date': '',
               'tech': [],
               'description': []}
    project['title'] = file.readline().replace("\n", "")
    project['date'] = file.readline().replace("\n", "")
    project['tech'] = file.readline().replace("\n", "").split(', ')
    desc = file.readline().replace("\n", "")
    while desc != '//':
      project['description'].append(desc)
      desc = file.readline().replace("\n", "")
    resume['projects'].append(project)
  elif line == '#Experience':
    experience = {'position': '',
               'organization': '',
               'date': '',
               'location': '',
               'description': []}
    experience['position'] = file.readline().replace("\n", "")
    experience['organization'] = file.readline().replace("\n", "")
    experience['date'] = file.readline().replace("\n", "")
    experience['location'] = file.readline().replace("\n", "")
    desc = file.readline().replace("\n", "")
    while desc != '//':
      experience['description'].append(desc)
      desc = file.readline().replace("\n", "")
    resume['experiences'].append(experience)
  if not line:
    break

file.close()
print(resume)

with open('./src/assets/resume-data.json', 'w') as out:
  json.dump(resume, out)


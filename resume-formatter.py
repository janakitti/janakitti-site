import json

resume = {'projects': [], 'experiences': [], 'portfolios': [], 'achievements': []}

file = open('resume-text.txt', 'r')

while True:
  line = file.readline().replace("\n", "")
  if line == '#Project':
    project = {'title': '',
               'subtitle': '',
               'date': '',
               'tech': [],
               'description': "",
               'link': '',
               'image': ''}
    project['title'] = file.readline().replace("\n", "")
    project['subtitle'] = file.readline().replace("\n", "")
    project['date'] = file.readline().replace("\n", "")
    project['tech'] = file.readline().replace("\n", "").split(', ')
    project['link'] = file.readline().replace("\n", "")
    project['image'] = file.readline().replace("\n", "")
    desc = file.readline().replace("\n", "")
    while desc != '//':
      project['description'] += desc
      desc = file.readline().replace("\n", "")
    resume['projects'].append(project)
  elif line == '#Experience':
    experience = {'position': '',
               'organization': '',
               'date': '',
               'location': '',
               'tech': '',
               'description': ""}
    experience['position'] = file.readline().replace("\n", "")
    experience['organization'] = file.readline().replace("\n", "")
    experience['date'] = file.readline().replace("\n", "")
    experience['location'] = file.readline().replace("\n", "")
    experience['tech'] = file.readline().replace("\n", "").split(', ')
    desc = file.readline().replace("\n", "")
    while desc != '//':
      experience['description'] += desc
      desc = file.readline().replace("\n", "")
    resume['experiences'].append(experience)
  elif line == '#Portfolio':
    portfolio = {'title': '',
               'subtitle': '',
               'date': '',
               'description': '',
               'link': '',
               'image': ''}
    portfolio['title'] = file.readline().replace("\n", "")
    portfolio['subtitle'] = file.readline().replace("\n", "")
    portfolio['date'] = file.readline().replace("\n", "")
    portfolio['link'] = file.readline().replace("\n", "")
    portfolio['image'] = file.readline().replace("\n", "")
    portfolio['description'] = file.readline().replace("\n", "")
    resume['portfolios'].append(portfolio)
  elif line == '#Achievement':
    achievement = {'title': '',
               'date': '',
               'description': ''}
    achievement['title'] = file.readline().replace("\n", "")
    achievement['date'] = file.readline().replace("\n", "")
    achievement['description'] = file.readline().replace("\n", "")
    resume['achievements'].append(achievement)
  if not line:
    break

file.close()
print(resume)

with open('./src/assets/resume-data.json', 'w') as out:
  json.dump(resume, out)


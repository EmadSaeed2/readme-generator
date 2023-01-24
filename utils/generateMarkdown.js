// function to generate markdown for README
function generateMarkdown(data) {
  md = `# ${data.app_name}`
  if (data.license && data.license == 'Apache') md += `\n[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  if (data.license && data.license == 'Boost') md += `\n[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  if (data.license && data.license == 'BSD') md += `\n[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  if (data.license && data.license == 'CC0') md += `\n[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  if (data.license && data.license == 'Eclipse Public License 1.0') md += `\n[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  if (data.license && data.license == 'GNU GPL v3') md += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  if (data.license && data.license == 'MIT') md += `\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  if (data.license && data.license == 'Perl') md += `\n![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  if (data.license && data.license == 'SIL') md += `\n[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`
  if (data.license && data.license == 'Zlib') md += `\n[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`

  md += `\n## Description
  ${data.description}`

  if (data.installation || data.usage || data.license || data.Contributing || data.tests || data.github || data.email) md += `\n## Table of Contents`

  if (data.installation) md += `\n- [Installation](#installation)`
  if (data.usage) md += `\n- [usage](#usage)`
  if (data.license) md += `\n- [License](#license)`
  if (data.contributing) md += `\n- [Contributing](#contributing)`
  if (data.tests) md += `\n- [Tests](#tests)`
  if (data.github || data.email) md += `\n- [Questions](#questions)`

  if (data.installation) {
    md +=
      `\n## Installation
  \`\`\`${data.installation}\`\`\`
`}

  if (data.usage) {
    md +=
      `## Usage
  ${data.usage}
`}

  if (data.license) {
    md +=
      `## License
  ${data.license}
`}

  if (data.contributing) {
    md +=
      `## Contributing
  ${data.contributing}
`}

  if (data.tests) {
    md +=
      `## Tests
  ${data.tests}
`}

  if (data.github || data.email) {
    md +=
      `## Questions
  - GitHub: https://github.com/${data.github}\n
  - Email: ${data.email}
`}


  return md;
}

module.exports = generateMarkdown;
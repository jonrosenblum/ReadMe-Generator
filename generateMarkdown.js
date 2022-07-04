// FUNCTION THAT RETURNS A LICENSE BADGE BASED ON WHICH LICENSE IS PASSED IN
function renderLicenseBadge(data) {
  const license = data.license;
  console.log(data.license);
  let badge = "updateME";
  if (license === "Apache License 2.0") {
    badge = "License-Apache_2.0-blue";
    return badge;
  }
  if (license === "BSD 3-Clause License") {
    badge = "License-BSD_3--Clause-blue";
    return badge;
  }
  if (license === "BSD 2-Clause License") {
    badge = "License-BSD_2--Clause-orange";
    return badge;
  }
  if (license === "ISC License (ISC)") {
    badge = "License-ISC-blue";
    return badge;
  }
  if (license === "The MIT License") {
    badge = "License-MIT-yellow";
    return badge;
  } else {
    badge = " ";
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const license = data.license;
  let link = "updateMe";
  if (license === "Apache License 2.0") {
    link = "Apache-2.0";
    return link;
  }
  if (license === "BSD 3-Clause License") {
    link = "BSD-3-Clause";
    return link;
  }
  if (license === "BSD 2-Clause License") {
    link = "BSD-2-Clause";
    return link;
  }
  if (license === "ISC License (ISC)") {
    link = "ISC";
    return link;
  }
  if (license === "The MIT License") {
    link = "MIT";
    return link;
  } else {
    link = " ";
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const license = data.license;
  let section = `updateMe`;
  if (license === "Apache License 2.0") {
    section = `Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
    return section;
  }
  if (license === "BSD 3-Clause License") {
    section = `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    return section;
  }
  if (license === "BSD 2-Clause License") {
    section = `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE`;
    return section;
  }
  if (license === "ISC License (ISC)") {
    section = `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
    return section;
  }
  if (license === "The MIT License") {
    section = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    return section;
  } else {
    section = " ";
    return section;
  }
}

module.exports = (data) => {
  return `# ${data.title}\n
  [![License](https://img.shields.io/badge/${renderLicenseBadge(
    data
  )}.svg)](https://opensource.org/licenses/${renderLicenseLink(data)})\n
  ## description\n
  ${data.description}\n
  ## table of Contents
  *  [installation instructions](#installation-instructions)
  *  [usage](#usage)
  *  [contribution guidelines](#contribution-guidelines)
  *  [test instructions](#test-instructions)
  *  [license](#license)
  *  [questions](#questions)
  ## installation \n
  ${data.install}\n
  ## usage\n
  ${data.usage}\n
  ## contribution guidlines\n
  ${data.contribution}\n
  ## test instructions\n
  ${data.test}\n
  ## license
  Copyright [${data.year}] [${data.name}]\n
  ${renderLicenseSection(data)}\n
  ## questions
 [CLICK HERE to view my github page](https://github.com/${data.github})\n
  if you have any questions, please email me at ${data.email}:purple_heart:\n
`;
};

export const LANGUAGE_VERSIONS = {
  javascript: {
    id: 63,
    version: "Node.js 12.14.0",
  },
  python: {
    id: 71,
    version: "3.10.0",
  },
  java: {
    id: 62,
    version: "OpenJDK 13.0.1",
  },
  cpp: {
    id: 52,
    version: "GCC 7.4.0",
  },
};

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n`,
  python: `def greet(name):\n\tprint("Hello, " + name + "!")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  cpp: `#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, World!";\n\treturn 0;\n}\n`,
};

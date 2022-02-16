/*
This interview is primarily about test-driven development.

Let's define an anagram as an arrangement of all letters.

First, fill in a function runTests that you can run and fail often while you
write the code for isAnagram. Your aim in runTests is to provide a succinct list
of tests that include all edge cases. You should be confident that if runTests
passes all your tets, your isAnagram function is perfectly correct.

Your isAnagram function should return a boolean value and should be time-
and space-efficient enough to be fed strings the sizes of an encyclopedia.
*/

const assert = require('assert');

function runTests() {
  assert(isAnagram('Night', 'Thing') === true);

  /* Write all your tests here */

  console.log('Success!');
}

function isAnagram(s1, s2) {

  /* Write logic here to return a boolean */

  return 'neither'
}

runTests();

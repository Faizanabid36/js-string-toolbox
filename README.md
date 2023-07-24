Introduction
-------

`ts-string-toolbox`, is a lightweight JavaScript library for the browser or for Node.js that provides extra String methods.

Installation
------------

1. If you want to use this library, you first need to install the [Node.js] (https://nodejs.org/en/).

2. When you install node.js, will also be installed [npm] (https://www.npmjs.com/).

3. Please run the following command.

```
npm i ts-string-toolbox
```

Methods
-------

### after

The `after` method returns everything after the given value in a string. The entire string will be returned if the value does not exist within the string:

```

after('This is my name', 'This is')
//  'my name'

```

### afterLast

The `afterLast` method returns everything after the last occurrence of the given value in a string. The entire string will be returned if the value does not exist within the string:

```

afterLast('App\Controllers\AuthController', '\\')
//  'AuthController'

```

### ascii

The `ascii` method will attempt to transliterate the string into an ASCII value:

```

ascii('û')
//  'u'

```

### begin

The `begin` method adds a single instance of the given value to a string if it does not already start with that value:

```

begin('this/string', '/')
//  '/this/string'

begin('/this/string', '/')
//  '/this/string'

```

### before

The `before` method returns everything before the given value in a string:

```

before('This is my name', 'my name')
//  'This is '

```

### beforeLast

The `beforeLast` method returns everything before the last occurrence of the given value in a string:

```

beforeLast('This is my name', 'is')
//  'This '

```

### between

The `between` method returns the portion of a string between two values:

```

between('This is my name', 'This', 'name')
//  ' is my '

```


### betweenFirst

The `betweenFirst` method returns the smallest possible portion of a string between two values:

```

betweenFirst('[a] bc [d]', '[', ']')
//  'a'

```

### camelCase

The `camelCase` method converts the given string to camel case:

```

camel('foo_bar')
//  'fooBar'

```

### contains

The `contains` method determines if the given string contains the given value. This method is case sensitive:

```

contains('This is my name', 'my')
//  true

```

You may also pass an array of values to determine if the given string contains any of the values in the array:

```

contains('This is my name', ['my', 'foo'])

//  true

```

### containsAll

The `containsAll` method determines if the given string contains all of the values in a given array:

```

containsAll('This is my name', ['my', 'name'])
//  true

```

### endsWith

The `endsWith` method determines if the given string ends with the given value:

```

endsWith('This is my name', 'name')
//  true

```

You may also pass an array of values to determine if the given string ends with any of the values in the array

```

endsWith('This is my name', ['name', 'foo'])
//  true

endsWith('This is my name', ['this', 'foo'])
//  false

```



### finish

The `finish` method adds a single instance of the given value to a string if it does not already end with that value:

```

finish('this/string', '/')
//  'this/string/'

finish('this/string/', '/')
//  'this/string/'

```

### headline

The `headline` method will convert strings delimited by casing, hyphens, or underscores into a space delimited string with each word's first letter capitalized:

```

headline('steve_jobs')
//  'Steve Jobs'

headline('EmailNotificationSent')
//  'Email Notification Sent'

```

### is

The `is` method determines if a given string matches a given pattern. Asterisks may be used as wildcard values:

```

is('foo*', 'foobar')
//  true

is('baz*', 'foobar')
//  false

```


### isJson

The `isJson` method determines if the given string is valid JSON:

```

isJson('[1,2,3]')
//  true

isJson('{"first": "John", "last": "Doe"}')
//  true

isJson('{first: "John", last: "Doe"}')
//  false

```

### isUrl

The `isUrl` method determines if the given string is a valid URL:

```

isUrl('http://example.com')
//  true

isUrl('nestjs')
//  false

```

### isUlid

The `isUlid` method determines if the given string is a valid ULID:

```

isUlid('01gd6r360bp37zj17nxb55yv40')
//  true

isUlid('expressjs')
//  false

```

### isUuid

The `isUuid` method determines if the given string is a valid UUID:

```

isUuid('a0a2a2d2-0b87-4a18-83f2-2529882be2de')
//  true

isUuid('reactjs')
//  false

```

### kebabCase

The `kebabCase` method converts the given string to kebab case:

```

kebab('fooBar')
//  'foo-bar'

```

### lcFirst

The `lcFirst` method returns the given string with the first character lowercased:

```

lcFirst('Foo Bar')
//  'foo Bar'

```

### limit

The `limit` method truncates the given string to the specified length:

```

limit('The quick brown fox jumps over the lazy dog', 20)
//  'The quick brown fox...'

```

You may pass a third argument to the method to change the string that will be appended to the end of the truncated string:

```

limit('The quick brown fox jumps over the lazy dog', 20, ' (...)')
//  'The quick brown fox (...)'

```

### lower

The `lower` method converts the given string to lowercase:

```

lower('NODEJS')
//  'nodejs'

```

### mask

The `mask` method masks a portion of a string with a repeated character, and may be used to obfuscate segments of strings such as email addresses and phone numbers:

```

mask('faizan@example.com', '*', 3)
//  'fai***************'

```

If needed, you provide a number as the fourth argument to the mask method, which will mask at the given distance to the length provided:

```

mask('faizan@example.com', '*', 2, 10)
//  'fa**********le.com'

```

### password

The `password` method may be used to generate a secure, random password of a given length. The password will consist of a combination of letters, numbers, symbols, and spaces. By default, passwords are 32 characters long:

```

password()
//  'ZaKo2vE-Bq:U,$%_nkrV4n,q~3qx/-_4'

password(12)
//  'xnu#ar>3V|i/N'

```

### remove

The `remove` method removes the given value or array of values from the string:

```

const string = 'Peter Piper picked a peck of pickled peppers.'
remove('e', string)
//  'Ptr Pipr pickd a pck of pickld ppprs.'

```

You may also pass false as a third argument to the remove method to ignore case when removing strings:

```

remove('P', string, true)
//  'eter ier icked a eck of ickled eers.'

```

You may also pass array of string as first argument if you want to remove multiple values from string:

```

remove(['e', 'p'], string, true)
//  'tr ir ickd a ck of ickld rs.'

```

### replaceStr

The `replaceStr` method replaces a given string within the string:

```

const string = 'React 16.x'
replaceStr('16.x', '18.x', string)
//  'React 18.x'

replaceStr("16.x", "18.x", "React 16.X", false)
//  'React 18.x'

```

### replaceArray

The `replaceArray` method replaces a given value in the string sequentially using an array:

```

const string = 'The event will take place between ? and ?'
replaceArray('?', ['8:30', '9:00'], string)
//  'The event will take place between 8:30 and 9:00'

```

### replaceArray

The `replaceArray` method replaces a given value in the string sequentially using an array:

```

const string = 'The event will take place between ? and ?'
replaceArray('?', ['8:30', '9:00'], string)
//  'The event will take place between 8:30 and 9:00'

```

### replaceFirst

The `replaceFirst` method replaces the first occurrence of a given value in a string:

```

replaceFirst('the', 'a', 'the quick brown fox jumps over the lazy dog')
//  'a quick brown fox jumps over the lazy dog'

```

### replaceLast

The `replaceLast` method replaces the last occurrence of a given value in a string:

```

replaceLast('the', 'a', 'the quick brown fox jumps over the lazy dog')
//  'the quick brown fox jumps over a lazy dog'

```

### slugify

The `slugify` method generates a URL friendly "slug" from the given string:

```

slugify('This is my name', '-')
//  'This-is-my-name'

```

### snakeCase

The `snakeCase` method converts the given string to snake case:

```

snakeCase('fooBar')
//  'foo_bar'

snake('fooBar', '-')
//  'foo-bar'

```

### squish

The `squish` method removes all extraneous white space from a string, including extraneous white space between words:

```

squish('    my    name    ')
//  'my name'

```

### startsWith

The `startsWith` method determines if the given string begins with the given value:

```

startsWith('This is my name', 'This')
//  true

```

If an array of possible values is passed, the startsWith method will return true if the string begins with any of the given values: 

```

startsWith('This is my name', ['This', 'That', 'There'])
//  true

```

### studly

The `studly` method converts the given string to studly case:

```

studly('foo_bar')
//  'FooBar'

```

### swap

The `swap` method replaces multiple values in the given string function:

```

swap([
    'Tacos' => 'Burritos',
    'great' => 'fantastic',
], 'Tacos are great!')
//  'Burritos are fantastic!'

```

### title

The `title` method converts the given string to title case:

```

title('a nice title uses the correct case')
//  'A Nice Title Uses The Correct Case'

```

### ucFirst

The `ucFirst` method returns the given string with the first character capitalized:

```

ucFirst('foo bar')
//  'Foo bar'

```

### upper

The `upper` method converts the given string to uppercase:

```

upper('me')
//  'ME'

```

### wordCount

The `wordCount` method returns the number of words that a string contains:

```

wordCount('Hello, world!')
//  2

```


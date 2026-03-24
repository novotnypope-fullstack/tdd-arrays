export function getFirst(array) {
  return array[0];
}

export function getLast(array) {
  return array[array.length - 1];
}

export function getFirstLast(array) {
  if (array.length === 0) return [];
  if (array.length === 1) return [array[0]];
  return [array[0], array[array.length - 1]];
}

export function sharesFirstLetter(str1, str2) {
  if (!str1 || !str2) return false;
  return str1[0] === str2[0];
}

export function quintuple(numbers) {
  return numbers.map(n => n * 5);
}

export function pluralize(words) {
  return words.map(word => {
    if (word.endsWith('s')) {
      return word + 'es';
    }
    return word + 's';
  });
}

export function countAttendance(attendance) {
  return attendance.filter(present => present).length;
}

export function getLongestWord(sentence) {
  if (sentence.length === 0) return null;
  let longest = sentence[0];
  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i].length > longest.length) {
      longest = sentence[i];
    }
  }
  return longest;
}

export function findSong(playlist, song) {
  return playlist.indexOf(song);
}

export function findSpy(map) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 'spy') {
        return [y, x];
      }
    }
  }
  return null;
}

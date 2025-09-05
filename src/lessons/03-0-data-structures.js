// Consider an array of objects, where each object is a journal entry.
const exampleJournal = [
  {
    date: '2020-01-01',
    events: ['lunch', 'work', 'tv'],
    calledMom: false,
    happiness: 6,
  },
  {
    date: '2020-01-02',
    events: ['lunch', 'work', 'gym'],
    calledMom: false,
    happiness: 3,
  },
  {
    date: '2020-01-03',
    events: ['lunch', 'work', 'phone'],
    calledMom: true,
    happiness: 8,
  },
  {
    date: '2020-01-04',
    events: ['movie', 'pizza', 'movie'],
    calledMom: true,
    happiness: 9,
  },
  {
    date: '2020-01-05',
    events: ['sleep'],
    calledMom: false,
    happiness: 7,
  },
];

// Write a function to check if the property calledMom exists in all journal entries.
// The in keyword can be used to check if a property exists in an object.
function checkIfCalledMomIsInJournal(journal) {
  // Your code here
  return journal.every((entry) => 'calledMom' in entry);
}

// Write a function to check if the property calledMom exists in any journal entries.
function checkIfCalledMomIsInAnyJournal(journal) {
  // Your code here
  return journal.some((entry) => 'calledMom' in entry);
}

//  Create a function that returns an array of all keys from the first entry of the journal.
function returnAllKeysFromFirstEntry(journal) {
  // Your code here
  return Object.keys(journal[0]);
}

// Write a function to return an array of all values from a specific journal entry.
function returnAllValuesFromSpecificEntry(journal, index) {
  // Your code here
  return Object.values(journal[index]);
}

// Create a function that Updates the second journal entry's events by adding a new event "dinner".
// The push method can be used to add an element to the end of an array.
// The second journal entry's events should look like this after the update:
// ["lunch", "work", "gym", "dinner"]
// It should return the updated journal.
function updateSecondEntry(journal) {
  // Your code here
  journal[1].events.push('dinner');
  return journal;
}

// Create a function that adds an event to a specific journal entry.
// The journal entry at the specified index should have the event added to its events array.
// If the index is out of range, it should return the original journal.
// It should return the updated journal.
function addEventToEntryAtIndex(journal, index, event) {
  // Your code here
  if (index < 0 || index >= journal.length) {
    return journal;
  }
  journal[index].events.push(event);
  return journal;
}

// Add a new journal entry to the end of exampleJournal.
// You can expect an entry to look like this:
// {
//   date: "2020-01-01",
//   events: ["lunch", "work", "tv"],
//   calledMom: true,
// }
// It should return the updated journal.
function addNewEntry(journal, entry) {
  // Your code here
  journal.push({
    date: entry.date,
    events: entry.events,
    calledMom: entry.calledMom,
  });
  return journal;
}

// Create a function that deletes the first journal entry.
// It should return the updated journal.
function deleteFirstEntry(journal) {
  // Your code here
  journal.shift();
  return journal;
}

// Create a function that finds the happiest day in the journal.
// The happiest day is the day with the highest happiness score.
// It should return the entry with the highest happiness score.
function findHappiestDay(journal) {
  // Assume the first entry is the happiest initially
  let happiestEntry = journal[0];

  // Loop through each journal entray starting from the second
  for (let i = 1; i < journal.length; i++) {
    // If current entry has higher happiness, update happiestEntry
    if (journal[i].happiness > happiestEntry.happiness) {
      happiestEntry = journal[i];
    }
  }
  // Return the entry with the highest happiness score
  return happiestEntry;
}

// Create a function that finds the average happiness score in the journal.
// It should return the average happiness score.
// Use the array reduce() method
function calculateAverageHappiness(journal) {
  const totalHappiness = journal.reduce(
    (total, entry) => total + entry.happiness,
    0
  );
  return totalHappiness / journal.length;
}

// Create a function that finds the most frequent activity in the journal.
// It should return the most frequent activity.
function mostFrequentActivity(journal) {
  const activityCounts = {};
  // Loop through each journal entry
  journal.forEach((entry) => {
    // Loop through each activity in the entry
    entry.events.forEach((event) => {
      // If the activity exists in the object, increment the count
      activityCounts[event] = (activityCounts[event] || 0) + 1;
    });
  });
  // Return the activity with highest count
  return Object.keys(activityCounts).reduce((a, b) =>
    activityCounts[a] > activityCounts[b] ? a : b
  );
}

// Create a function that filters the journal by activity.
// It should return an array of entries that include the specified activity.
function filterEntriesByActivity(journal, activity) {
  return journal.filter((entry) => entry.events.includes(activity));
}

// Create a function that returns the longest streak of consecutive days where mom was called.
// It should return the longest streak.
function longestMomCallStreak(journal) {
  let maxStreak = 0;
  let currentStreak = 0;
  journal.forEach((entry) => {
    if (entry.calledMom) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });
  return maxStreak;
}

// Create a function that adds an event to all entries that do not have calledMom set to true.
// It should return the updated journal.
// You should consider giving your mom a call.
function addEventIfMomNotCalled(journal, event) {
  journal.forEach((entry) => {
    if (!entry.calledMom) {
      entry.events.push(event);
    }
  });
  return journal;
}

// Create a function that generates a report for the journal.
// It should return a string with the following format:
// Total Entries: 5, Average Happiness: 6.6, Most Common Activity: work
// You should reuse the functions you created above.
function generateJournalReport(journal) {
  const totalEntries = journal.length;
  const averageHappiness = calculateAverageHappiness(journal); //Reusing Function from Above
  const mostCommonActivity = mostFrequentActivity(journal); //Reusing Function from Above
  return `Total Entries: ${totalEntries}, Average Happiness: ${averageHappiness}, Most Common Activity: ${mostCommonActivity}`;
}

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
              <div>Date: ${entry.date}</div>
              <div class="concept">Concept: ${entry.concept}</div>
              <div>Entry: ${entry.entry}</div>
              <div>Mood: ${entry.mood}</div>
      </section>
  `
}

export default JournalEntryComponent
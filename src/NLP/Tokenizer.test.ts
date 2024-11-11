import { describe, it, expect } from 'vitest'
import { Tokenizer } from './Tokenizer'

describe('Tokenizer', () => {
  it('should tokenize a simple text', () => {
    const tokens = new Tokenizer()
      .setText("Hello world")
      .execute()

    expect(tokens).toEqual(['Hello', 'world'])
  })

  it('should remove punctuation', () => {
    const tokens = new Tokenizer()
        .setText("Hello, world!")
        .execute()

    expect(tokens).toEqual(['Hello', 'world'])
  })

  it('should handle multiple spaces between words', () => {
    const tokens = new Tokenizer()
      .setText("Hello     world")
      .execute()

    expect(tokens).toEqual(['Hello', 'world'])
  })

  it('should ignore specified words', () => {
    const tokens = new Tokenizer()
      .setText("Hello, world! Let's tokenize this text with attention to hyphenated-words.")
      .setIgnore(['this', 'with', 'to'])
      .execute()

    expect(tokens).toEqual(['Hello', 'world', "Let's", 'tokenize', 'text', 'attention', 'hyphenated-words'])
  })

  it('should return an empty array for empty text', () => {
    const tokens = new Tokenizer()
      .execute()

    expect(tokens).toEqual([])
  })

  it('should allow setting text and ignore list after instantiation', () => {
    const tokenizer = new Tokenizer()
    tokenizer.setText("Testing tokenization").setIgnore(['Testing'])
    const tokens = tokenizer.execute()
    expect(tokens).toEqual(['tokenization'])
  })
  
  it('should be case insensitive when filtering ignored words', () => {
    const tokens = new Tokenizer()
      .setText("Tokenize and ignore some Words")
      .setIgnore(['and', 'some', 'words'])
      .execute()

    expect(tokens).toEqual(['Tokenize', 'ignore'])
  })
})

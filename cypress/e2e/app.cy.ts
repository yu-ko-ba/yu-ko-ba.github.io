import { ContentType, getContents } from "../../src/utils/getContents"

describe('get contents', () => {
  it('should return to the contents array', () => {
    const good: ContentType[] = [
      {
        title: "今日の日付",
        description: "現在の日付を表示するWebアプリ",
        image: "https://raw.githubusercontent.com/yu-ko-ba/what-is-the-date-today/main/screenshot.png"
      }
    ]

    expect(getContents())
      .to.equal(good)
  })
})

// Prevent TypeScript from reading file as legacy script
export {}

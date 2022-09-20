import { ContentType, fetchContents } from "../../src/utils/fetchContents"

describe('get contents', () => {
  it('should return to the contents array', async () => {
    const good: ContentType[] = [
      {
        title: "今日の日付",
        description: "現在の日付を表示するWebアプリ",
        image: "https://raw.githubusercontent.com/yu-ko-ba/what-is-the-date-today/main/screenshot.png"
      }
    ]

    const contents = await fetchContents(["https://yu-ko-ba.github.io/what-is-the-date-today/"])

    expect(contents[0].title).to.equal(good[0].title)
    expect(contents[0].description).to.equal(good[0].description)
    expect(contents[0].image).to.equal(good[0].image)
  })
})

// Prevent TypeScript from reading file as legacy script
export {}

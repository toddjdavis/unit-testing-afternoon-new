import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'
import { text } from 'express'

test('Will ensure the string is under 100 characters', ()=> {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText will be cut off at 100 characters', ()=> {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
})

test('word count sould correctly count the length of a sentance', ()=> {
    expect(wordCount(posts)).toBe(233)
})

text('attachUserName should correctly attach a user', ()=>{
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUsername should be removed', ()=>{
    const newPosts = attachUserName(users, posts)
    const deletePost = posts[5]
    expect(newPosts).not.toContainEqual(deletePost)
})
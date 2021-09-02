import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { Rootstate } from '../reducers'

export const articlesTypeSelector: TypedUseSelectorHook<Rootstate> = useSelector

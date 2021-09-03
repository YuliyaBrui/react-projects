import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { Rootstate } from '../reducers'

export const useTypeSelector: TypedUseSelectorHook<Rootstate> = useSelector

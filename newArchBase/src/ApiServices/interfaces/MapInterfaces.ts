export interface IPlacesAutocomplete {
    input : string,
    location ?: string,
    type ?: 'geocode' | 'address' | 'establishment' | '(regions)' | '(cities)',
    key ?: string,
    sessiontoken ?: string,
}
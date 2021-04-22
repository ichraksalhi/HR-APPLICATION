const isEmpty = (value) => 
value === undefined ||
value == null || 
(typeof value === 'object' && Object.keys(value) === 0 ) ||
(typeof value === String && value.trim().length() ===0 )

export default isEmpty;
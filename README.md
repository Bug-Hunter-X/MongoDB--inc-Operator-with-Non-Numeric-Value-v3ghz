# MongoDB $inc Operator with Non-Numeric Value

This example demonstrates an uncommon error that arises when using MongoDB's `$inc` operator with a non-numeric value. The `$inc` operator is designed for incrementing numeric fields, and providing it with `NaN` (Not a Number) results in an error. 

**Problem:**  Improper data validation before updating a field might lead to this situation. For instance, if the `counter` field is unexpectedly assigned a non-numeric value before the update operation is performed, the `$inc` will fail.

**Solution:**   Ensure that data validation is performed before updating the document and that the field to be incremented is always numeric.  Consider implementing data validation mechanisms before each update, using appropriate checks to avoid this error.
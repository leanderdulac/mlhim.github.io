#Changes from 2.4.1 to 2.4.2
Planned entries that are in _italics_ have been completed and moved to the Committed section.


##Committed:
1. DvStringType should be the type for the 'units' attribute of DvCount, DvQuantity and DvRatio (numerator, denominator and ratio), 
thus allowing all of them to be defined either by a DvString (when the unit is not available in any terminology) or by DvCodedString 
(when the unit of measurement can be found in a terminology or any type of controlled vocabulary).

2. There should be a 'ratio_units' attribute in DvRatio. The probability that, in one of the zillions of healthcare domains, for a given concept expressed as a ratio, 
the numerator unit is 'A', the denominator unit is 'B', and the ratio unit is known as 'Omega_Z' instead of 'A/B', is not zero.

3. Rename the XMind template from CDD-(version).xmt  to MLHIM_Model-(version).xmt

4. Remove the SlotType and SlotType. Slots are not useful in MLHIM

5. In DvEncapsulated the element name charset has been changed to encoding. Character set is no longer recommended for use in computer science.

6. In DvOrdered, remove the normal-rage element and rename other-reference-ranges to reference-ranges. The semantics of the named elements causes 
confusion in modelling and has no real purpose in MLHIM. Allowing zero to unbounded numbers of reference-ranges is necessary in many cases and each 
reference range needs its own semantics, independent of the MLHIM RM.
 
 7. Include a boolean in ReferenceRange to indicate if this is a normal range.  The name is, 'is-normal'._
 
 8. Remove Locatable and Definition and simplify the model by making all CCD.defintions an Entry. No need for Cluster or Element CCDs now, since PCTs are designed to be re-usable._
 
 
 
 
##Planned:

1. _DvStringType should be the type for the 'units' attribute of DvCount, DvQuantity and DvRatio (numerator, denominator and ratio), 
thus allowing all of them to be defined either by a DvString (when the unit is not available in any terminology) or by DvCodedString 
(when the unit of measurement can be found in a terminology or any type of controlled vocabulary)._

2. _There should be a 'ratio_units' attribute in DvRatio. The probability that, in one of the zillions of healthcare domains, for a given concept expressed as a ratio, 
the numerator unit is 'A', the denominator unit is 'B', and the ratio unit is known as 'Omega_Z' instead of 'A/B', is not zero._

3. _Rename the XMind template from CDD-(version).xmt  to MLHIM_Model-(version).xmt_

4. _Remove the SlotType and SlotType. Slots are not useful in MLHIM_

5. _In DvEncapsulated the element name charset has been changed to encoding. Character set is no longer recommended for use in computer science_

6. _In DvOrdered, remove the normal-rage element and rename other-reference-ranges to reference-ranges. The semantics of the named elements causes 
confusion in modelling and has no real purpose in MLHIM. Allowing zero to unbounded numbers of reference-ranges is necessary in many cases and each 
reference range needs its own semantics, independent of the MLHIM RM._
 
 7. _Include a boolean in ReferenceRange to indicate if this is a normal range.  The name is, 'is-normal'._
 
 8. _Remove Locatable and Definition and simplify the model by making all CCD.defintions an Entry. No need for Cluster or Element CCDs now, since PCTs are designed to be re-usable._
 

# react-strict-hooks/no-useeffect-misuse

<!-- end auto-generated rule header -->

This rule is intended to prevent incorrect render flow due to a combination of useEffect + useState.

Using setState in useEffect causes excess renders, which hurts performance.

It also may lead to incorrect/unreproducible intermediate state, which hurts ui behaviour.
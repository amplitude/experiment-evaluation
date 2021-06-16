package com.amplitude.experiment.evaluation

internal enum class Operator(val value: Int) {
    IS(1),
    IS_NOT(2),
    CONTAINS(3),
    DOES_NOT_CONTAIN(4),
    LESS_THAN(5),
    LESS_THAN_EQUALS(6),
    GREATER_THAN(7),
    GREATER_THAN_EQUALS(8),
    SET_IS(9),
    SET_IS_NOT(10),
    CSS_MATCH(11),
    GLOB_MATCH(12),
    SET_CONTAINS(13),
    SET_DOES_NOT_CONTAIN(14),
    GLOB_DOES_NOT_MATCH(15),
    VERSION_LESS_THAN(16),
    VERSION_LESS_THAN_EQUALS(17),
    VERSION_GREATER_THAN(18),
    VERSION_GREATER_THAN_EQUALS(19),
    HAS_PREFIX(20);
}

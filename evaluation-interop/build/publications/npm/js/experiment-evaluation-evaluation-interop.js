(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['experiment-evaluation-evaluation-interop'] = factory(typeof this['experiment-evaluation-evaluation-interop'] === 'undefined' ? {} : this['experiment-evaluation-evaluation-interop']);
}(this, function (_) {
  'use strict';
  AbstractSet.prototype = Object.create(AbstractCollection.prototype);
  AbstractSet.prototype.constructor = AbstractSet;
  _no_name_provided__2.prototype = Object.create(AbstractSet.prototype);
  _no_name_provided__2.prototype.constructor = _no_name_provided__2;
  KVariance.prototype = Object.create(Enum.prototype);
  KVariance.prototype.constructor = KVariance;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  _no_name_provided__11.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__11.prototype.constructor = _no_name_provided__11;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  LinkedHashSet.prototype = Object.create(HashSet.prototype);
  LinkedHashSet.prototype.constructor = LinkedHashSet;
  NodeJsOutput_0.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput_0.prototype.constructor = NodeJsOutput_0;
  BufferedOutput_0.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput_0.prototype.constructor = BufferedOutput_0;
  BufferedOutputToConsoleLog_0.prototype = Object.create(BufferedOutput_0.prototype);
  BufferedOutputToConsoleLog_0.prototype.constructor = BufferedOutputToConsoleLog_0;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  CharacterCodingException.prototype = Object.create(Exception.prototype);
  CharacterCodingException.prototype.constructor = CharacterCodingException;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  ArithmeticException.prototype = Object.create(RuntimeException.prototype);
  ArithmeticException.prototype.constructor = ArithmeticException;
  NumberFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  NumberFormatException.prototype.constructor = NumberFormatException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  ListLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  ListLikeSerializer.prototype.constructor = ListLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  LinkedHashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  ReferenceArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  Default.prototype = Object.create(Json.prototype);
  Default.prototype.constructor = Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  ComposerForUnsignedNumbers.prototype = Object.create(Composer.prototype);
  ComposerForUnsignedNumbers.prototype.constructor = ComposerForUnsignedNumbers;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  JsonDecoderForUnsignedTypes.prototype = Object.create(AbstractDecoder.prototype);
  JsonDecoderForUnsignedTypes.prototype.constructor = JsonDecoderForUnsignedTypes;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  Operator.prototype = Object.create(Enum.prototype);
  Operator.prototype.constructor = Operator;
  function toList(_this_) {
    var tmp0_subject = _this_.length;
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this_[0]);
      default:return toMutableList(_this_);
    }
  }
  function withIndex(_this_) {
    return new IndexingIterable(_no_name_provided_$factory(_this_));
  }
  function _get_indices_(_this_) {
    return new IntRange(0, _get_lastIndex_(_this_));
  }
  function toMutableList(_this_) {
    return ArrayList_init_$Create$_1(asCollection(_this_));
  }
  function _get_lastIndex_(_this_) {
    return _this_.length - 1 | 0;
  }
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last_0);
    } else {
      var inductionVariable_0 = 0;
      var last_1 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_1)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_1(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_1);
    }
    return -1;
  }
  function toSet(_this_) {
    var tmp0_subject = _this_.length;
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf_0(_this_[0]);
      default:return toCollection(_this_, LinkedHashSet_init_$Create$_1(mapCapacity(_this_.length)));
    }
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0;
  }
  function toCollection(_this_, destination) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.add_16(item);
      Unit_getInstance();
    }
    return destination;
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_2(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    $l$break: while (inductionVariable < last_0) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_2(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_2(truncated);
      Unit_getInstance();
    }buffer.append_2(postfix);
    Unit_getInstance();
    return buffer;
  }
  function single(_this_) {
    var tmp0_subject = _this_.length;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('Array is empty.');
      case 1:
        tmp = _this_[0];
        break;
      default:throw IllegalArgumentException_init_$Create$_0('Array has more than one element.');
    }
    return tmp;
  }
  function _no_name_provided_($this_withIndex) {
    this._$this_withIndex = $this_withIndex;
  }
  _no_name_provided_.prototype.invoke_93 = function () {
    return arrayIterator(this._$this_withIndex);
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory($this_withIndex) {
    var i = new _no_name_provided_($this_withIndex);
    return function () {
      return i.invoke_93();
    };
  }
  function toHashSet(_this_) {
    return toCollection_0(_this_, HashSet_init_$Create$_1(mapCapacity(collectionSizeOrDefault(_this_, 12))));
  }
  function toBooleanArray(_this_) {
    var result = booleanArray(_this_._get_size__28());
    var index = 0;
    var tmp0_iterator = _this_.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var element = tmp0_iterator.next_13();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function toCollection_0(_this_, destination) {
    var tmp0_iterator = _this_.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var item = tmp0_iterator.next_13();
      destination.add_16(item);
      Unit_getInstance();
    }
    return destination;
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_2(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_38();
    $l$break: while (tmp0_iterator.hasNext_13()) {
      var element = tmp0_iterator.next_13();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_2(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_2(truncated);
      Unit_getInstance();
    }buffer.append_2(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default(_this_, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function last(_this_) {
    if (_this_.isEmpty_28())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_28(_get_lastIndex__0(_this_));
  }
  function toList_0(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__28();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_28(0);
          } else {
            {
              tmp_0 = _this_.iterator_38().next_13();
            }
          }

          tmp = listOf(tmp_0);
          break;
        default:tmp = toMutableList_0(_this_);
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlyList(toMutableList_1(_this_));
  }
  function singleOrNull(_this_) {
    return _this_._get_size__28() === 1 ? _this_.get_28(0) : null;
  }
  function contains_0(_this_, element) {
    if (isInterface(_this_, Collection))
      return _this_.contains_26(element);
    else {
    }
    return indexOf_0(_this_, element) >= 0;
  }
  function toMutableList_0(_this_) {
    return ArrayList_init_$Create$_1(_this_);
  }
  function toMutableList_1(_this_) {
    if (isInterface(_this_, Collection))
      return toMutableList_0(_this_);
    else {
    }
    return toCollection_0(_this_, ArrayList_init_$Create$());
  }
  function indexOf_0(_this_, element) {
    if (isInterface(_this_, List))
      return _this_.indexOf_5(element);
    else {
    }
    var index = 0;
    var tmp0_iterator = _this_.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var item = tmp0_iterator.next_13();
      checkIndexOverflow(index);
      Unit_getInstance();
      if (equals_1(element, item))
        return index;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      Unit_getInstance();
    }
    return -1;
  }
  function single_0(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return single_1(_this_);
    else {
      {
        var iterator = _this_.iterator_38();
        if (!iterator.hasNext_13())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var single_3 = iterator.next_13();
        if (iterator.hasNext_13())
          throw IllegalArgumentException_init_$Create$_0('Collection has more than one element.');
        return single_3;
      }
    }
  }
  function single_1(_this_) {
    var tmp0_subject = _this_._get_size__28();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this_.get_28(0);
        break;
      default:throw IllegalArgumentException_init_$Create$_0('List has more than one element.');
    }
    return tmp;
  }
  function lastOrNull(_this_) {
    return _this_.isEmpty_28() ? null : _this_.get_28(_this_._get_size__28() - 1 | 0);
  }
  function minOrNull(_this_) {
    var iterator = _this_.iterator_38();
    if (!iterator.hasNext_13())
      return null;
    var min = iterator.next_13();
    while (iterator.hasNext_13()) {
      var e = iterator.next_13();
      if (compareTo(min, e) > 0)
        min = e;
    }
    return min;
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE_5)
      return Companion_getInstance_8()._EMPTY;
    return numberRangeToNumber(_this_, to_0 - 1 | 0);
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function downTo(_this_, to_0) {
    return Companion_getInstance_7().fromClosedRange(_this_, to_0, -1);
  }
  function step(_this_, step_0) {
    checkStepIsPositive(step_0 > 0, step_0);
    return Companion_getInstance_7().fromClosedRange(_this_._first_1, _this_._last, _this_._step_0 > 0 ? step_0 : -step_0 | 0);
  }
  function coerceAtMost(_this_, maximumValue) {
    return _this_ > maximumValue ? maximumValue : _this_;
  }
  function coerceIn(_this_, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$_0('' + 'Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this_ < minimumValue)
      return minimumValue;
    if (_this_ > maximumValue)
      return maximumValue;
    return _this_;
  }
  function map(_this_, transform) {
    return new TransformingSequence(_this_, transform);
  }
  function toList_1(_this_) {
    return optimizeReadOnlyList(toMutableList_2(_this_));
  }
  function toMutableList_2(_this_) {
    return toCollection_1(_this_, ArrayList_init_$Create$());
  }
  function toCollection_1(_this_, destination) {
    var tmp0_iterator = _this_.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var item = tmp0_iterator.next_13();
      destination.add_16(item);
      Unit_getInstance();
    }
    return destination;
  }
  function plus(_this_, elements) {
    var tmp0_safe_receiver = collectionSizeOrNull(elements);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = _this_._get_size__28() + tmp0_safe_receiver | 0;
    }
    var tmp1_elvis_lhs = tmp;
    var result = LinkedHashSet_init_$Create$_1(mapCapacity(tmp1_elvis_lhs == null ? imul(_this_._get_size__28(), 2) : tmp1_elvis_lhs));
    result.addAll_9(_this_);
    Unit_getInstance();
    addAll(result, elements);
    Unit_getInstance();
    return result;
  }
  function single_2(_this_) {
    var tmp0_subject = charSequenceLength(_this_);
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('Char sequence is empty.');
      case 1:
        tmp = charSequenceGet(_this_, 0);
        break;
      default:throw IllegalArgumentException_init_$Create$_0('Char sequence has more than one element.');
    }
    return tmp;
  }
  function dropLast(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }return take(_this_, coerceAtLeast(_this_.length - n | 0, 0));
  }
  function take(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var tmp1_substring_0 = 0;
    var tmp2_substring_0 = coerceAtMost(n, _this_.length);
    return _this_.substring(tmp1_substring_0, tmp2_substring_0);
  }
  function drop(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var tmp1_substring_0 = coerceAtMost(n, _this_.length);
    return _this_.substring(tmp1_substring_0);
  }
  function _no_name_provided__0(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided__0.prototype.invoke_0 = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided__0.prototype.invoke_95 = function (p1) {
    return this.invoke_0((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_26 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_28();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_38();
      while (tmp0_iterator_1.hasNext_13()) {
        var element_2 = tmp0_iterator_1.next_13();
        if (equals_1(element_2, element)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_21 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_28();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_38();
      while (tmp0_iterator_1.hasNext_13()) {
        var element_2 = tmp0_iterator_1.next_13();
        if (!this.contains_26(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_28 = function () {
    return this._get_size__28() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_0(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkPositionIndex = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkBoundsIndexes = function (startIndex, endIndex, size) {
    if (startIndex < 0 ? true : endIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'startIndex: ' + startIndex + ', endIndex: ' + endIndex + ', size: ' + size);
    }if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$_0('' + 'startIndex: ' + startIndex + ' > endIndex: ' + endIndex);
    }};
  Companion_0.prototype.orderedHashCode = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var e = tmp0_iterator.next_13();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals = function (c, other) {
    if (!(c._get_size__28() === other._get_size__28()))
      return false;
    var otherIterator = other.iterator_38();
    var tmp0_iterator = c.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var elem = tmp0_iterator.next_13();
      var elemOther = otherIterator.next_13();
      if (!equals_1(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function _no_name_provided__1($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__1.prototype.hasNext_13 = function () {
    return this._$entryIterator.hasNext_13();
  };
  _no_name_provided__1.prototype.next_13 = function () {
    return this._$entryIterator.next_13()._get_key__3();
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__5();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_38();
      while (tmp0_iterator_1.hasNext_13()) {
        var element_2 = tmp0_iterator_1.next_13();
        if (equals_1(element_2._get_key__3(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode = function (e) {
    var tmp2_safe_receiver_4 = e._get_key__3();
    var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
    var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
    var tmp0_safe_receiver_6 = e._get_value__14();
    var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
    return tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
  };
  Companion_1.prototype.entryToString = function (e) {
    return '' + e._get_key__3() + '=' + e._get_value__14();
  };
  Companion_1.prototype.entryEquals = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_1(e._get_key__3(), other._get_key__3()) ? equals_1(e._get_value__14(), other._get_value__14()) : false;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__2(this$0) {
    this._this$0_0 = this$0;
    AbstractSet.call(this);
  }
  _no_name_provided__2.prototype.contains_19 = function (element) {
    return this._this$0_0.containsKey_8(element);
  };
  _no_name_provided__2.prototype.contains_26 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_19((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__2.prototype.iterator_38 = function () {
    var entryIterator = this._this$0_0._get_entries__5().iterator_38();
    return new _no_name_provided__1(entryIterator);
  };
  _no_name_provided__2.prototype._get_size__28 = function () {
    return this._this$0_0._get_size__28();
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3(this$0) {
    this._this$0_1 = this$0;
  }
  _no_name_provided__3.prototype.invoke_2 = function (it) {
    return this._this$0_1.toString_0(it);
  };
  _no_name_provided__3.prototype.invoke_95 = function (p1) {
    return this.invoke_2((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_8 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_5 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__3();
    var value = entry._get_value__14();
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_16(key);
    if (!equals_1(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_8(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__28() === other._get_size__28()))
      return false;
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = other._get_entries__5();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_28();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_38();
      while (tmp0_iterator_1.hasNext_13()) {
        var element_2 = tmp0_iterator_1.next_13();
        if (!this.containsEntry_5(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_16 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__14();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__5());
  };
  AbstractMap.prototype.isEmpty_28 = function () {
    return this._get_size__28() === 0;
  };
  AbstractMap.prototype._get_size__28 = function () {
    return this._get_entries__5()._get_size__28();
  };
  AbstractMap.prototype._get_keys__5 = function () {
    if (this.__keys == null) {
      var tmp = this;
      tmp.__keys = new _no_name_provided__2(this);
    }return ensureNotNull(this.__keys);
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__5();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_1(this), 24, null);
  };
  AbstractMap.prototype.toString_0 = function (entry) {
    return toString(this, entry._get_key__3()) + '=' + toString(this, entry._get_value__14());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_1(this$0) {
    var i = new _no_name_provided__3(this$0);
    return function (p1) {
      return i.invoke_2(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var element = tmp0_iterator.next_13();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals = function (c, other) {
    if (!(c._get_size__28() === other._get_size__28()))
      return false;
    return c.containsAll_21(other);
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function AbstractSet() {
    Companion_getInstance_1();
    AbstractCollection.call(this);
  }
  AbstractSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractSet.$metadata$ = {
    simpleName: 'AbstractSet',
    kind: 'class',
    interfaces: [Set]
  };
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_28();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__28 = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_28 = function () {
    return true;
  };
  EmptyList.prototype.contains_7 = function (element) {
    return false;
  };
  EmptyList.prototype.contains_26 = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_7(tmp);
  };
  EmptyList.prototype.containsAll_6 = function (elements) {
    return elements.isEmpty_28();
  };
  EmptyList.prototype.containsAll_21 = function (elements) {
    return this.containsAll_6(elements);
  };
  EmptyList.prototype.get_28 = function (index) {
    throw IndexOutOfBoundsException_init_$Create$('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.indexOf = function (element) {
    return -1;
  };
  EmptyList.prototype.indexOf_5 = function (element) {
    if (!false)
      return -1;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.indexOf(tmp);
  };
  EmptyList.prototype.iterator_38 = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_13 = function () {
    return false;
  };
  EmptyIterator.prototype.next_13 = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function asCollection(_this_) {
    return new ArrayAsCollection(_this_, false);
  }
  function _get_lastIndex__0(_this_) {
    return _this_._get_size__28() - 1 | 0;
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function ArrayAsCollection(values_1, isVarargs) {
    this._values = values_1;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__28 = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_28 = function () {
    var tmp0_isEmpty_0 = this._values;
    return tmp0_isEmpty_0.length === 0;
  };
  ArrayAsCollection.prototype.contains_5 = function (element) {
    return contains(this._values, element);
  };
  ArrayAsCollection.prototype.contains_26 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_5((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayAsCollection.prototype.containsAll_4 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_28();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_38();
      while (tmp0_iterator_1.hasNext_13()) {
        var element_2 = tmp0_iterator_1.next_13();
        if (!this.contains_5(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_21 = function (elements) {
    return this.containsAll_4(elements);
  };
  ArrayAsCollection.prototype.iterator_38 = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__28();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this_.get_28(0));
      default:return _this_;
    }
  }
  function IndexedValue(index, value) {
    this._index = index;
    this._value = value;
  }
  IndexedValue.prototype.toString = function () {
    return '' + 'IndexedValue(index=' + this._index + ', value=' + this._value + ')';
  };
  IndexedValue.prototype.hashCode = function () {
    var result = this._index;
    result = imul(result, 31) + (this._value == null ? 0 : hashCode(this._value)) | 0;
    return result;
  };
  IndexedValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IndexedValue))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IndexedValue ? other : THROW_CCE();
    if (!(this._index === tmp0_other_with_cast._index))
      return false;
    if (!equals_1(this._value, tmp0_other_with_cast._value))
      return false;
    return true;
  };
  IndexedValue.$metadata$ = {
    simpleName: 'IndexedValue',
    kind: 'class',
    interfaces: []
  };
  function IndexingIterable(iteratorFactory) {
    this._iteratorFactory = iteratorFactory;
  }
  IndexingIterable.prototype.iterator_38 = function () {
    return new IndexingIterator(this._iteratorFactory());
  };
  IndexingIterable.$metadata$ = {
    simpleName: 'IndexingIterable',
    kind: 'class',
    interfaces: [Iterable]
  };
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__28();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function collectionSizeOrNull(_this_) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__28();
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function IndexingIterator(iterator) {
    this._iterator = iterator;
    this._index_0 = 0;
  }
  IndexingIterator.prototype.hasNext_13 = function () {
    return this._iterator.hasNext_13();
  };
  IndexingIterator.prototype.next_13 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._index_0;
    tmp0_this._index_0 = tmp1 + 1 | 0;
    return new IndexedValue(checkIndexOverflow(tmp1), this._iterator.next_13());
  };
  IndexingIterator.$metadata$ = {
    simpleName: 'IndexingIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function getOrImplicitDefault(_this_, key) {
    if (isInterface(_this_, MapWithDefault))
      return _this_.getOrImplicitDefault(key);
    else {
    }
    var tmp$ret$0;
    l$ret$1: do {
      var value_1 = _this_.get_16(key);
      if (value_1 == null ? !_this_.containsKey_8(key) : false) {
        throw NoSuchElementException_init_$Create$_0('' + 'Key ' + key + ' is missing in the map.');
      } else {
        tmp$ret$0 = (value_1 == null ? true : isObject(value_1)) ? value_1 : THROW_CCE();
        break l$ret$1;
      }
    }
     while (false);
    return tmp$ret$0;
  }
  function MapWithDefault() {
  }
  MapWithDefault.$metadata$ = {
    simpleName: 'MapWithDefault',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function mapOf(pairs) {
    return pairs.length > 0 ? toMap_0(pairs, LinkedHashMap_init_$Create$_1(mapCapacity(pairs.length))) : emptyMap();
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map_0) ? tmp : THROW_CCE();
  }
  function toMap(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__28();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyMap();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_28(0);
          } else {
            {
              tmp_0 = _this_.iterator_38().next_13();
            }
          }

          tmp = mapOf_0(tmp_0);
          break;
        default:tmp = toMap_1(_this_, LinkedHashMap_init_$Create$_1(mapCapacity(_this_._get_size__28())));
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlyMap(toMap_1(_this_, LinkedHashMap_init_$Create$()));
  }
  function toMap_0(_this_, destination) {
    putAll(destination, _this_);
    return destination;
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this._serialVersionUID_0 = new Long(-888910638, 1920087921);
  }
  EmptyMap.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map_0) : false) {
      tmp = other.isEmpty_28();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyMap.prototype.hashCode = function () {
    return 0;
  };
  EmptyMap.prototype.toString = function () {
    return '{}';
  };
  EmptyMap.prototype._get_size__28 = function () {
    return 0;
  };
  EmptyMap.prototype.isEmpty_28 = function () {
    return true;
  };
  EmptyMap.prototype.containsKey_0 = function (key) {
    return false;
  };
  EmptyMap.prototype.containsKey_8 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    else {
    }
    return this.containsKey_0((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.get_1 = function (key) {
    return null;
  };
  EmptyMap.prototype.get_16 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    else {
    }
    return this.get_1((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype._get_entries__5 = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.prototype._get_keys__5 = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.$metadata$ = {
    simpleName: 'EmptyMap',
    kind: 'object',
    interfaces: [Map_0, Serializable]
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function toMap_1(_this_, destination) {
    putAll_0(destination, _this_);
    return destination;
  }
  function optimizeReadOnlyMap(_this_) {
    var tmp0_subject = _this_._get_size__28();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = emptyMap();
        break;
      case 1:
        tmp = _this_;
        break;
      default:tmp = _this_;
        break;
    }
    return tmp;
  }
  function putAll(_this_, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.component1();
      var value = tmp1_loop_parameter.component2();
      _this_.put_4(key, value);
      Unit_getInstance();
    }
  }
  function putAll_0(_this_, pairs) {
    var tmp0_iterator = pairs.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var tmp1_loop_parameter = tmp0_iterator.next_13();
      var key = tmp1_loop_parameter.component1();
      var value = tmp1_loop_parameter.component2();
      _this_.put_4(key, value);
      Unit_getInstance();
    }
  }
  function hashMapOf(pairs) {
    var tmp0_apply_0 = HashMap_init_$Create$_1(mapCapacity(pairs.length));
    putAll(tmp0_apply_0, pairs);
    return tmp0_apply_0;
  }
  function getValue(_this_, key) {
    return getOrImplicitDefault(_this_, key);
  }
  function removeLast(_this_) {
    var tmp;
    if (_this_.isEmpty_28()) {
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    } else {
      tmp = _this_.removeAt_1(_get_lastIndex__0(_this_));
    }
    return tmp;
  }
  function addAll(_this_, elements) {
    var tmp0_subject = elements;
    if (isInterface(tmp0_subject, Collection))
      return _this_.addAll_9(elements);
    else {
      {
        var result = false;
        var tmp1_iterator = elements.iterator_38();
        while (tmp1_iterator.hasNext_13()) {
          var item = tmp1_iterator.next_13();
          if (_this_.add_16(item))
            result = true;
        }
        return result;
      }
    }
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided__4(this$0) {
    this._this$0_2 = this$0;
    this._iterator_0 = this._this$0_2._sequence.iterator_38();
  }
  _no_name_provided__4.prototype.next_13 = function () {
    return this._this$0_2._transformer(this._iterator_0.next_13());
  };
  _no_name_provided__4.prototype.hasNext_13 = function () {
    return this._iterator_0.hasNext_13();
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function TransformingSequence(sequence, transformer) {
    this._sequence = sequence;
    this._transformer = transformer;
  }
  TransformingSequence.prototype.iterator_38 = function () {
    return new _no_name_provided__4(this);
  };
  TransformingSequence.$metadata$ = {
    simpleName: 'TransformingSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function setOf(elements) {
    return elements.length > 0 ? toSet(elements) : emptySet();
  }
  function EmptySet() {
    EmptySet_instance = this;
    this._serialVersionUID_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_28();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype._get_size__28 = function () {
    return 0;
  };
  EmptySet.prototype.isEmpty_28 = function () {
    return true;
  };
  EmptySet.prototype.contains_7 = function (element) {
    return false;
  };
  EmptySet.prototype.contains_26 = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_7(tmp);
  };
  EmptySet.prototype.containsAll_6 = function (elements) {
    return elements.isEmpty_28();
  };
  EmptySet.prototype.containsAll_21 = function (elements) {
    return this.containsAll_6(elements);
  };
  EmptySet.prototype.iterator_38 = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = {
    simpleName: 'EmptySet',
    kind: 'object',
    interfaces: [Set, Serializable]
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function emptySet() {
    return EmptySet_getInstance();
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet_init_$Create$_1(mapCapacity(elements.length)));
  }
  function checkStepIsPositive(isPositive, step_0) {
    if (!isPositive)
      throw IllegalArgumentException_init_$Create$_0('' + 'Step must be positive, was: ' + step_0 + '.');
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function Companion_3() {
    Companion_instance_2 = this;
    this._star = new KTypeProjection(null, null);
  }
  Companion_3.prototype.invariant = function (type) {
    return new KTypeProjection(KVariance_INVARIANT_getInstance(), type);
  };
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function KTypeProjection(variance, type) {
    Companion_getInstance_2();
    this._variance = variance;
    this._type = type;
    var tmp0_require_0 = this._variance == null === (this._type == null);
    if (!tmp0_require_0) {
      var message_2 = this._variance == null ? 'Star projection must have no type specified.' : '' + 'The projection variance ' + this._variance + ' requires type to be specified.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }}
  KTypeProjection.prototype.toString = function () {
    var tmp0_subject = this._variance;
    var tmp;
    if (tmp0_subject == null) {
      tmp = '*';
    } else if (equals_1(tmp0_subject, KVariance_INVARIANT_getInstance())) {
      tmp = toString_0(this._type);
    } else if (equals_1(tmp0_subject, KVariance_IN_getInstance())) {
      tmp = '' + 'in ' + this._type;
    } else if (equals_1(tmp0_subject, KVariance_OUT_getInstance())) {
      tmp = '' + 'out ' + this._type;
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  KTypeProjection.prototype.hashCode = function () {
    var result = this._variance == null ? 0 : this._variance.hashCode();
    result = imul(result, 31) + (this._type == null ? 0 : hashCode(this._type)) | 0;
    return result;
  };
  KTypeProjection.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KTypeProjection))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof KTypeProjection ? other : THROW_CCE();
    if (!equals_1(this._variance, tmp0_other_with_cast._variance))
      return false;
    if (!equals_1(this._type, tmp0_other_with_cast._type))
      return false;
    return true;
  };
  KTypeProjection.$metadata$ = {
    simpleName: 'KTypeProjection',
    kind: 'class',
    interfaces: []
  };
  var KVariance_INVARIANT_instance;
  var KVariance_IN_instance;
  var KVariance_OUT_instance;
  var KVariance_entriesInitialized;
  function KVariance_initEntries() {
    if (KVariance_entriesInitialized)
      return Unit_getInstance();
    KVariance_entriesInitialized = true;
    KVariance_INVARIANT_instance = new KVariance('INVARIANT', 0);
    KVariance_IN_instance = new KVariance('IN', 1);
    KVariance_OUT_instance = new KVariance('OUT', 2);
  }
  function KVariance(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  KVariance.$metadata$ = {
    simpleName: 'KVariance',
    kind: 'class',
    interfaces: []
  };
  function KVariance_INVARIANT_getInstance() {
    KVariance_initEntries();
    return KVariance_INVARIANT_instance;
  }
  function KVariance_IN_getInstance() {
    KVariance_initEntries();
    return KVariance_IN_instance;
  }
  function KVariance_OUT_getInstance() {
    KVariance_initEntries();
    return KVariance_OUT_instance;
  }
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_2(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_2(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_1(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_2(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this_);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (thisUpper.equals(otherUpper)) {
      tmp = true;
    } else {
      var tmp0_asDynamic_0 = thisUpper.toString();
      var tmp1_unsafeCast_0 = tmp0_asDynamic_0.toLowerCase();
      var tmp_0 = charSequenceGet(tmp1_unsafeCast_0, 0);
      var tmp2_asDynamic_0 = otherUpper.toString();
      var tmp3_unsafeCast_0 = tmp2_asDynamic_0.toLowerCase();
      tmp = tmp_0.equals(charSequenceGet(tmp3_unsafeCast_0, 0));
    }
    return tmp;
  }
  function trimIndent(_this_) {
    return replaceIndent(_this_, '');
  }
  function replaceIndent(_this_, newIndent) {
    var lines_0 = lines(_this_);
    var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1_2 = lines_0.iterator_38();
    while (tmp0_iterator_1_2.hasNext_13()) {
      var element_2_3 = tmp0_iterator_1_2.next_13();
      if (isNotBlank(element_2_3)) {
        tmp0_filterTo_0_1.add_16(element_2_3);
        Unit_getInstance();
      }}
    var tmp0_map_0 = tmp0_filterTo_0_1;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2_0 = tmp0_map_0.iterator_38();
    while (tmp0_iterator_1_2_0.hasNext_13()) {
      var item_2_3 = tmp0_iterator_1_2_0.next_13();
      tmp0_mapTo_0_1.add_16(indentWidth(item_2_3));
      Unit_getInstance();
    }
    var tmp0_elvis_lhs = minOrNull(tmp0_mapTo_0_1);
    var minCommonIndent = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp1_reindent_0 = _this_.length + imul(newIndent.length, lines_0._get_size__28()) | 0;
    var tmp2_reindent_0 = getIndentFunction(newIndent);
    var lastIndex_1 = _get_lastIndex__0(lines_0);
    var tmp1_mapIndexedNotNullTo_0_1 = ArrayList_init_$Create$();
    var index_1_2 = 0;
    var tmp0_iterator_2_3 = lines_0.iterator_38();
    while (tmp0_iterator_2_3.hasNext_13()) {
      var item_3_4 = tmp0_iterator_2_3.next_13();
      var tmp1_4_6 = index_1_2;
      index_1_2 = tmp1_4_6 + 1 | 0;
      var tmp0__anonymous__1_5_5 = checkIndexOverflow(tmp1_4_6);
      var tmp;
      if ((tmp0__anonymous__1_5_5 === 0 ? true : tmp0__anonymous__1_5_5 === lastIndex_1) ? isBlank(item_3_4) : false) {
        tmp = null;
      } else {
        var tmp0_safe_receiver_4_10 = drop(item_3_4, minCommonIndent);
        var tmp_0;
        if (tmp0_safe_receiver_4_10 == null) {
          tmp_0 = null;
        } else {
          tmp_0 = tmp2_reindent_0(tmp0_safe_receiver_4_10);
        }
        var tmp1_elvis_lhs_3_9 = tmp_0;
        tmp = tmp1_elvis_lhs_3_9 == null ? item_3_4 : tmp1_elvis_lhs_3_9;
      }
      var tmp0_safe_receiver_2_6_7 = tmp;
      if (tmp0_safe_receiver_2_6_7 == null)
        null;
      else {
        tmp1_mapIndexedNotNullTo_0_1.add_16(tmp0_safe_receiver_2_6_7);
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    var tmp_1 = StringBuilder_init_$Create$(tmp1_reindent_0);
    return joinTo$default(tmp1_mapIndexedNotNullTo_0_1, tmp_1, '\n', null, null, 0, null, null, 124, null).toString();
  }
  function indentWidth(_this_) {
    var tmp$ret$0;
    l$ret$1: do {
      var inductionVariable = 0;
      var last_0 = charSequenceLength(_this_) - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0__anonymous__3 = charSequenceGet(_this_, index_2);
          if (!isWhitespace(tmp0__anonymous__3)) {
            tmp$ret$0 = index_2;
            break l$ret$1;
          } else {
          }
        }
         while (inductionVariable <= last_0);
      tmp$ret$0 = -1;
    }
     while (false);
    var tmp1_let_0 = tmp$ret$0;
    return tmp1_let_0 === -1 ? _this_.length : tmp1_let_0;
  }
  function getIndentFunction(indent) {
    var tmp;
    if (charSequenceLength(indent) === 0) {
      tmp = _no_name_provided_$factory_2();
    } else {
      {
        tmp = _no_name_provided_$factory_3(indent);
      }
    }
    return tmp;
  }
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_6 = function (line) {
    return line;
  };
  _no_name_provided__5.prototype.invoke_95 = function (p1) {
    return this.invoke_6((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__6($indent) {
    this._$indent = $indent;
  }
  _no_name_provided__6.prototype.invoke_6 = function (line) {
    return this._$indent + line;
  };
  _no_name_provided__6.prototype.invoke_95 = function (p1) {
    return this.invoke_6((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_6(p1);
    };
  }
  function _no_name_provided_$factory_3($indent) {
    var i = new _no_name_provided__6($indent);
    return function (p1) {
      return i.invoke_6(p1);
    };
  }
  function toIntOrNull(_this_) {
    return toIntOrNull_0(_this_, 10);
  }
  function toIntOrNull_0(_this_, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this_.length;
    if (length === 0)
      return null;
    var start;
    var isNegative_0;
    var limit;
    var firstChar = charSequenceGet(_this_, 0);
    if (firstChar.compareTo_9(new Char(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar.equals(new Char(45))) {
        isNegative_0 = true;
        limit = IntCompanionObject_getInstance()._MIN_VALUE_5;
      } else if (firstChar.equals(new Char(43))) {
        isNegative_0 = false;
        limit = -IntCompanionObject_getInstance()._MAX_VALUE_5 | 0;
      } else
        return null;
    } else {
      start = 0;
      isNegative_0 = false;
      limit = -IntCompanionObject_getInstance()._MAX_VALUE_5 | 0;
    }
    var limitForMaxRadix = (-IntCompanionObject_getInstance()._MAX_VALUE_5 | 0) / 36 | 0;
    var limitBeforeMul = limitForMaxRadix;
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this_, i), radix);
        if (digit < 0)
          return null;
        if (result < limitBeforeMul) {
          if (limitBeforeMul === limitForMaxRadix) {
            limitBeforeMul = limit / radix | 0;
            if (result < limitBeforeMul) {
              return null;
            }} else {
            return null;
          }
        }result = imul(result, radix);
        if (result < (limit + digit | 0))
          return null;
        result = result - digit | 0;
      }
       while (inductionVariable < length);
    return isNegative_0 ? result : -result | 0;
  }
  function toLongOrNull(_this_) {
    return toLongOrNull_0(_this_, 10);
  }
  function toLongOrNull_0(_this_, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this_.length;
    if (length === 0)
      return null;
    var start;
    var isNegative_0;
    var limit;
    var firstChar = charSequenceGet(_this_, 0);
    if (firstChar.compareTo_9(new Char(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar.equals(new Char(45))) {
        isNegative_0 = true;
        Companion_getInstance_11();
        limit = new Long(0, -2147483648);
      } else if (firstChar.equals(new Char(43))) {
        isNegative_0 = false;
        Companion_getInstance_11();
        limit = (new Long(-1, 2147483647)).unaryMinus_4();
      } else
        return null;
    } else {
      start = 0;
      isNegative_0 = false;
      Companion_getInstance_11();
      limit = (new Long(-1, 2147483647)).unaryMinus_4();
    }
    Companion_getInstance_11();
    var tmp0_div_0 = (new Long(-1, 2147483647)).unaryMinus_4();
    var tmp1_div_0 = 36;
    var limitForMaxRadix = tmp0_div_0.div_27(toLong_0(tmp1_div_0));
    var limitBeforeMul = limitForMaxRadix;
    var result = new Long(0, 0);
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this_, i), radix);
        if (digit < 0)
          return null;
        if (result.compareTo_45(limitBeforeMul) < 0) {
          if (limitBeforeMul.equals(limitForMaxRadix)) {
            limitBeforeMul = limit.div_27(toLong_0(radix));
            if (result.compareTo_45(limitBeforeMul) < 0) {
              return null;
            }} else {
            return null;
          }
        }var tmp2_times_0 = result;
        result = tmp2_times_0.times_27(toLong_0(radix));
        var tmp = result;
        if (tmp.compareTo_45(limit.plus_27(toLong_0(digit))) < 0)
          return null;
        else {
        }
        var tmp3_minus_0 = result;
        result = tmp3_minus_0.minus_28(toLong_0(digit));
      }
       while (inductionVariable < length);
    return isNegative_0 ? result : result.unaryMinus_4();
  }
  function numberFormatError(input) {
    throw NumberFormatException_init_$Create$('' + "Invalid number format: '" + input + "'");
  }
  function isNotBlank(_this_) {
    return !isBlank(_this_);
  }
  function _get_lastIndex__1(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function indexOf_1(_this_, char, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp0_charArrayOf_0 = charArrayOf([char]);
      tmp = indexOfAny(_this_, tmp0_charArrayOf_0, startIndex, ignoreCase);
    } else {
      {
        var tmp2_nativeIndexOf_0 = _this_;
        var tmp1_nativeIndexOf_0 = char.toString();
        tmp = tmp2_nativeIndexOf_0.indexOf(tmp1_nativeIndexOf_0, startIndex);
      }
    }
    return tmp;
  }
  function indexOf$default(_this_, char, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_1(_this_, char, startIndex, ignoreCase);
  }
  function lastIndexOf(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_2(_this_, string, startIndex, 0, ignoreCase, true);
    } else {
      {
        var tmp0_nativeLastIndexOf_0 = _this_;
        tmp = tmp0_nativeLastIndexOf_0.lastIndexOf(string, startIndex);
      }
    }
    return tmp;
  }
  function lastIndexOf$default(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = _get_lastIndex__1(_this_);
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return lastIndexOf(_this_, string, startIndex, ignoreCase);
  }
  function contains_1(_this_, other, ignoreCase) {
    var tmp;
    if (typeof other === 'string') {
      var tmp_0 = other;
      tmp = indexOf$default_1(_this_, tmp_0, 0, ignoreCase, 2, null) >= 0;
    } else {
      {
        var tmp_1 = charSequenceLength(_this_);
        tmp = indexOf$default_0(_this_, other, 0, tmp_1, ignoreCase, false, 16, null) >= 0;
      }
    }
    return tmp;
  }
  function indexOfAny(_this_, chars, startIndex, ignoreCase) {
    var tmp;
    if (!ignoreCase ? chars.length === 1 : false) {
      tmp = typeof _this_ === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var char = single(chars);
      var tmp1_nativeIndexOf_0 = _this_;
      var tmp0_nativeIndexOf_0 = char.toString();
      return tmp1_nativeIndexOf_0.indexOf(tmp0_nativeIndexOf_0, startIndex);
    } else {
    }
    var inductionVariable = coerceAtLeast(startIndex, 0);
    var last_0 = _get_lastIndex__1(_this_);
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var charAtIndex = charSequenceGet(_this_, index);
        var tmp$ret$0;
        l$ret$1: do {
          var indexedObject = chars;
          var inductionVariable_0 = 0;
          var last_1 = indexedObject.length;
          while (inductionVariable_0 < last_1) {
            var element_2 = indexedObject[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (equals(element_2, charAtIndex, ignoreCase)) {
              tmp$ret$0 = true;
              break l$ret$1;
            } else {
            }
          }
          tmp$ret$0 = false;
        }
         while (false);
        if (tmp$ret$0)
          return index;
        else {
        }
      }
       while (!(index === last_0));
    return -1;
  }
  function indexOf_2(_this_, other, startIndex, endIndex, ignoreCase, last_0) {
    var indices = !last_0 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this_))) : downTo(coerceAtMost(startIndex, _get_lastIndex__1(_this_)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this_ === 'string') {
      tmp = typeof other === 'string';
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var inductionVariable = indices._first_1;
      var last_1 = indices._last;
      var step_0 = indices._step_0;
      if ((step_0 > 0 ? inductionVariable <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          if (regionMatches(other, 0, _this_, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_1));
    } else {
      {
        var inductionVariable_0 = indices._first_1;
        var last_2 = indices._last;
        var step_1 = indices._step_0;
        if ((step_1 > 0 ? inductionVariable_0 <= last_2 : false) ? true : step_1 < 0 ? last_2 <= inductionVariable_0 : false)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_1 | 0;
            if (regionMatchesImpl(other, 0, _this_, index_0, charSequenceLength(other), ignoreCase))
              return index_0;
          }
           while (!(index_0 === last_2));
      }
    }
    return -1;
  }
  function indexOf$default_0(_this_, other, startIndex, endIndex, ignoreCase, last_0, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      last_0 = false;
    return indexOf_2(_this_, other, startIndex, endIndex, ignoreCase, last_0);
  }
  function indexOf_3(_this_, string, startIndex, ignoreCase) {
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this_ === 'string');
    }
    if (tmp_0) {
      var tmp_1 = charSequenceLength(_this_);
      tmp = indexOf$default_0(_this_, string, startIndex, tmp_1, ignoreCase, false, 16, null);
    } else {
      {
        var tmp0_nativeIndexOf_0 = _this_;
        tmp = tmp0_nativeIndexOf_0.indexOf(string, startIndex);
      }
    }
    return tmp;
  }
  function indexOf$default_1(_this_, string, startIndex, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    return indexOf_3(_this_, string, startIndex, ignoreCase);
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function lineSequence(_this_) {
    var tmp = ['\r\n', '\n', '\r'];
    return splitToSequence$default(_this_, tmp, false, 0, 6, null);
  }
  function splitToSequence(_this_, delimiters, ignoreCase, limit) {
    var tmp = rangesDelimitedBy$default(_this_, delimiters, 0, ignoreCase, limit, 2, null);
    return map(tmp, _no_name_provided_$factory_4(_this_));
  }
  function splitToSequence$default(_this_, delimiters, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    if (!(($mask0 & 4) === 0))
      limit = 0;
    return splitToSequence(_this_, delimiters, ignoreCase, limit);
  }
  function substring(_this_, range) {
    return toString_1(charSequenceSubSequence(_this_, range._get_start_(), range._get_endInclusive_() + 1 | 0));
  }
  function rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit) {
    var tmp0_require_0 = limit >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Limit must be non-negative, but was ' + limit + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this_, startIndex, limit, _no_name_provided_$factory_5(delimitersList, ignoreCase));
  }
  function rangesDelimitedBy$default(_this_, delimiters, startIndex, ignoreCase, limit, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      ignoreCase = false;
    if (!(($mask0 & 8) === 0))
      limit = 0;
    return rangesDelimitedBy(_this_, delimiters, startIndex, ignoreCase, limit);
  }
  function calcNext($this) {
    if ($this._nextSearchIndex < 0) {
      $this._nextState = 0;
      $this._nextItem = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this._this$0_3._limit > 0) {
        var tmp0_this = $this;
        tmp0_this._counter = tmp0_this._counter + 1 | 0;
        tmp_0 = tmp0_this._counter >= $this._this$0_3._limit;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        {
          tmp = $this._nextSearchIndex > charSequenceLength($this._this$0_3._input);
        }
      }
      if (tmp) {
        $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__1($this._this$0_3._input));
        $this._nextSearchIndex = -1;
      } else {
        {
          var match_1 = $this._this$0_3._getNextMatch($this._this$0_3._input, $this._nextSearchIndex);
          if (match_1 == null) {
            $this._nextItem = numberRangeToNumber($this._currentStartIndex, _get_lastIndex__1($this._this$0_3._input));
            $this._nextSearchIndex = -1;
          } else {
            var tmp1_container = match_1;
            var index = tmp1_container.component1();
            var length = tmp1_container.component2();
            $this._nextItem = until($this._currentStartIndex, index);
            $this._currentStartIndex = index + length | 0;
            $this._nextSearchIndex = $this._currentStartIndex + (length === 0 ? 1 : 0) | 0;
          }
        }
      }
      $this._nextState = 1;
    }
  }
  function _no_name_provided__7(this$0) {
    this._this$0_3 = this$0;
    this._nextState = -1;
    this._currentStartIndex = coerceIn(this._this$0_3._startIndex, 0, charSequenceLength(this._this$0_3._input));
    this._nextSearchIndex = this._currentStartIndex;
    this._nextItem = null;
    this._counter = 0;
  }
  _no_name_provided__7.prototype.next_13 = function () {
    if (this._nextState === -1)
      calcNext(this);
    if (this._nextState === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this._nextItem;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this._nextItem = null;
    this._nextState = -1;
    return result;
  };
  _no_name_provided__7.prototype.hasNext_13 = function () {
    if (this._nextState === -1)
      calcNext(this);
    return this._nextState === 1;
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this._input = input;
    this._startIndex = startIndex;
    this._limit = limit;
    this._getNextMatch = getNextMatch;
  }
  DelimitedRangesSequence.prototype.iterator_38 = function () {
    return new _no_name_provided__7(this);
  };
  DelimitedRangesSequence.$metadata$ = {
    simpleName: 'DelimitedRangesSequence',
    kind: 'class',
    interfaces: [Sequence]
  };
  function findAnyOf(_this_, strings, startIndex, ignoreCase, last_0) {
    if (!ignoreCase ? strings._get_size__28() === 1 : false) {
      var string = single_0(strings);
      var tmp;
      if (!last_0) {
        tmp = indexOf$default_1(_this_, string, startIndex, false, 4, null);
      } else {
        tmp = lastIndexOf$default(_this_, string, startIndex, false, 4, null);
      }
      var index = tmp;
      return index < 0 ? null : to(index, string);
    }var indices = !last_0 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this_)) : downTo(coerceAtMost(startIndex, _get_lastIndex__1(_this_)), 0);
    if (typeof _this_ === 'string') {
      var inductionVariable = indices._first_1;
      var last_1 = indices._last;
      var step_0 = indices._step_0;
      if ((step_0 > 0 ? inductionVariable <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          var tmp$ret$0;
          l$ret$1: do {
            var tmp0_iterator_1 = strings.iterator_38();
            while (tmp0_iterator_1.hasNext_13()) {
              var element_2 = tmp0_iterator_1.next_13();
              if (regionMatches(element_2, 0, _this_, index_0, element_2.length, ignoreCase)) {
                tmp$ret$0 = element_2;
                break l$ret$1;
              } else {
              }
            }
            tmp$ret$0 = null;
          }
           while (false);
          var matchingString = tmp$ret$0;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_1));
    } else {
      {
        var inductionVariable_0 = indices._first_1;
        var last_2 = indices._last;
        var step_1 = indices._step_0;
        if ((step_1 > 0 ? inductionVariable_0 <= last_2 : false) ? true : step_1 < 0 ? last_2 <= inductionVariable_0 : false)
          do {
            var index_1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_1 | 0;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_iterator_1_0 = strings.iterator_38();
              while (tmp0_iterator_1_0.hasNext_13()) {
                var element_2_0 = tmp0_iterator_1_0.next_13();
                if (regionMatchesImpl(element_2_0, 0, _this_, index_1, element_2_0.length, ignoreCase)) {
                  tmp$ret$2 = element_2_0;
                  break l$ret$3;
                } else {
                }
              }
              tmp$ret$2 = null;
            }
             while (false);
            var matchingString_0 = tmp$ret$2;
            if (!(matchingString_0 == null))
              return to(index_1, matchingString_0);
          }
           while (!(index_1 === last_2));
      }
    }
    return null;
  }
  function lines(_this_) {
    return toList_1(lineSequence(_this_));
  }
  function _no_name_provided__8($this_splitToSequence) {
    this._$this_splitToSequence = $this_splitToSequence;
  }
  _no_name_provided__8.prototype.invoke_8 = function (it) {
    return substring(this._$this_splitToSequence, it);
  };
  _no_name_provided__8.prototype.invoke_95 = function (p1) {
    return this.invoke_8(p1 instanceof IntRange ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9($delimitersList, $ignoreCase) {
    this._$delimitersList = $delimitersList;
    this._$ignoreCase = $ignoreCase;
  }
  _no_name_provided__9.prototype.invoke_10 = function ($this$$receiver, currentIndex) {
    var tmp0_safe_receiver = findAnyOf($this$$receiver, this._$delimitersList, currentIndex, this._$ignoreCase, false);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = to(tmp0_safe_receiver._first, tmp0_safe_receiver._second.length);
    }
    return tmp;
  };
  _no_name_provided__9.prototype.invoke_11 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isCharSequence(p1) : false) ? p1 : THROW_CCE();
    return this.invoke_10(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_4($this_splitToSequence) {
    var i = new _no_name_provided__8($this_splitToSequence);
    return function (p1) {
      return i.invoke_8(p1);
    };
  }
  function _no_name_provided_$factory_5($delimitersList, $ignoreCase) {
    var i = new _no_name_provided__9($delimitersList, $ignoreCase);
    return function (p1, p2) {
      return i.invoke_10(p1, p2);
    };
  }
  function Lazy() {
  }
  Lazy.$metadata$ = {
    simpleName: 'Lazy',
    kind: 'interface',
    interfaces: []
  };
  function UnsafeLazyImpl(initializer) {
    this._initializer = initializer;
    this.__value = UNINITIALIZED_VALUE_getInstance();
  }
  UnsafeLazyImpl.prototype._get_value__14 = function () {
    if (this.__value === UNINITIALIZED_VALUE_getInstance()) {
      this.__value = ensureNotNull(this._initializer)();
      this._initializer = null;
    }var tmp = this.__value;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  UnsafeLazyImpl.prototype.isInitialized = function () {
    return !(this.__value === UNINITIALIZED_VALUE_getInstance());
  };
  UnsafeLazyImpl.prototype.toString = function () {
    return this.isInitialized() ? toString_0(this._get_value__14()) : 'Lazy value not initialized yet.';
  };
  UnsafeLazyImpl.$metadata$ = {
    simpleName: 'UnsafeLazyImpl',
    kind: 'class',
    interfaces: [Lazy, Serializable]
  };
  function UNINITIALIZED_VALUE() {
    UNINITIALIZED_VALUE_instance = this;
  }
  UNINITIALIZED_VALUE.$metadata$ = {
    simpleName: 'UNINITIALIZED_VALUE',
    kind: 'object',
    interfaces: []
  };
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    if (UNINITIALIZED_VALUE_instance == null)
      new UNINITIALIZED_VALUE();
    return UNINITIALIZED_VALUE_instance;
  }
  function Pair(first, second) {
    this._first = first;
    this._second = second;
  }
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1 = function () {
    return this._first;
  };
  Pair.prototype.component2 = function () {
    return this._second;
  };
  Pair.prototype.hashCode = function () {
    var result = this._first == null ? 0 : hashCode(this._first);
    result = imul(result, 31) + (this._second == null ? 0 : hashCode(this._second)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_1(this._first, tmp0_other_with_cast._first))
      return false;
    if (!equals_1(this._second, tmp0_other_with_cast._second))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function Triple(first, second, third) {
    this._first_0 = first;
    this._second_0 = second;
    this._third = third;
  }
  Triple.prototype.toString = function () {
    return '' + '(' + this._first_0 + ', ' + this._second_0 + ', ' + this._third + ')';
  };
  Triple.prototype.hashCode = function () {
    var result = this._first_0 == null ? 0 : hashCode(this._first_0);
    result = imul(result, 31) + (this._second_0 == null ? 0 : hashCode(this._second_0)) | 0;
    result = imul(result, 31) + (this._third == null ? 0 : hashCode(this._third)) | 0;
    return result;
  };
  Triple.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Triple))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Triple ? other : THROW_CCE();
    if (!equals_1(this._first_0, tmp0_other_with_cast._first_0))
      return false;
    if (!equals_1(this._second_0, tmp0_other_with_cast._second_0))
      return false;
    if (!equals_1(this._third, tmp0_other_with_cast._third))
      return false;
    return true;
  };
  Triple.$metadata$ = {
    simpleName: 'Triple',
    kind: 'class',
    interfaces: [Serializable]
  };
  function _UByte___init__impl_(data) {
    return data;
  }
  function _UByte___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_4() {
    Companion_instance_3 = this;
    this._MIN_VALUE = _UByte___init__impl_(0);
    this._MAX_VALUE = _UByte___init__impl_(-1);
    this._SIZE_BYTES = 1;
    this._SIZE_BITS = 8;
  }
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function UByte__compareTo_impl(this_0, other) {
    var tmp = _UByte___get_data__impl_(this_0) & 255;
    return compareTo(tmp, _UByte___get_data__impl_(other) & 255);
  }
  function UByte__compareTo_impl_0(this_0, other) {
    var tmp = this_0._data;
    return UByte__compareTo_impl(tmp, other instanceof UByte ? other._data : THROW_CCE());
  }
  function UByte__toString_impl(this_0) {
    return (_UByte___get_data__impl_(this_0) & 255).toString();
  }
  function UByte__hashCode_impl(this_0) {
    return this_0;
  }
  function UByte__equals_impl(this_0, other) {
    if (!(other instanceof UByte))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UByte ? other._data : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UByte(data) {
    Companion_getInstance_3();
    this._data = data;
  }
  UByte.prototype.compareTo_0 = function (other) {
    return UByte__compareTo_impl(this._data, other);
  };
  UByte.prototype.compareTo_14 = function (other) {
    return UByte__compareTo_impl_0(this, other);
  };
  UByte.prototype.toString = function () {
    return UByte__toString_impl(this._data);
  };
  UByte.prototype.hashCode = function () {
    return UByte__hashCode_impl(this._data);
  };
  UByte.prototype.equals = function (other) {
    return UByte__equals_impl(this._data, other);
  };
  UByte.$metadata$ = {
    simpleName: 'UByte',
    kind: 'class',
    interfaces: [Comparable]
  };
  function _UInt___init__impl_(data) {
    return data;
  }
  function _UInt___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_5() {
    Companion_instance_4 = this;
    this._MIN_VALUE_0 = _UInt___init__impl_(0);
    this._MAX_VALUE_0 = _UInt___init__impl_(-1);
    this._SIZE_BYTES_0 = 4;
    this._SIZE_BITS_0 = 32;
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function UInt__compareTo_impl(this_0, other) {
    return uintCompare(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(other));
  }
  function UInt__compareTo_impl_0(this_0, other) {
    var tmp = this_0._data_0;
    return UInt__compareTo_impl(tmp, other instanceof UInt ? other._data_0 : THROW_CCE());
  }
  function UInt__toString_impl(this_0) {
    return toLong_0(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)).toString();
  }
  function UInt__hashCode_impl(this_0) {
    return this_0;
  }
  function UInt__equals_impl(this_0, other) {
    if (!(other instanceof UInt))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UInt ? other._data_0 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UInt(data) {
    Companion_getInstance_4();
    this._data_0 = data;
  }
  UInt.prototype.compareTo_2 = function (other) {
    return UInt__compareTo_impl(this._data_0, other);
  };
  UInt.prototype.compareTo_14 = function (other) {
    return UInt__compareTo_impl_0(this, other);
  };
  UInt.prototype.toString = function () {
    return UInt__toString_impl(this._data_0);
  };
  UInt.prototype.hashCode = function () {
    return UInt__hashCode_impl(this._data_0);
  };
  UInt.prototype.equals = function (other) {
    return UInt__equals_impl(this._data_0, other);
  };
  UInt.$metadata$ = {
    simpleName: 'UInt',
    kind: 'class',
    interfaces: [Comparable]
  };
  function _ULong___init__impl_(data) {
    return data;
  }
  function _ULong___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_6() {
    Companion_instance_5 = this;
    this._MIN_VALUE_1 = _ULong___init__impl_(new Long(0, 0));
    this._MAX_VALUE_1 = _ULong___init__impl_(new Long(-1, -1));
    this._SIZE_BYTES_1 = 8;
    this._SIZE_BITS_1 = 64;
  }
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function ULong__compareTo_impl(this_0, other) {
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(other));
  }
  function ULong__compareTo_impl_0(this_0, other) {
    var tmp = this_0._data_1;
    return ULong__compareTo_impl(tmp, other instanceof ULong ? other._data_1 : THROW_CCE());
  }
  function ULong__toString_impl(this_0) {
    return ulongToString(_ULong___get_data__impl_(this_0));
  }
  function ULong__hashCode_impl(this_0) {
    return this_0.hashCode();
  }
  function ULong__equals_impl(this_0, other) {
    if (!(other instanceof ULong))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ULong ? other._data_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ULong(data) {
    Companion_getInstance_5();
    this._data_1 = data;
  }
  ULong.prototype.compareTo_4 = function (other) {
    return ULong__compareTo_impl(this._data_1, other);
  };
  ULong.prototype.compareTo_14 = function (other) {
    return ULong__compareTo_impl_0(this, other);
  };
  ULong.prototype.toString = function () {
    return ULong__toString_impl(this._data_1);
  };
  ULong.prototype.hashCode = function () {
    return ULong__hashCode_impl(this._data_1);
  };
  ULong.prototype.equals = function (other) {
    return ULong__equals_impl(this._data_1, other);
  };
  ULong.$metadata$ = {
    simpleName: 'ULong',
    kind: 'class',
    interfaces: [Comparable]
  };
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_7() {
    Companion_instance_6 = this;
    this._MIN_VALUE_2 = _UShort___init__impl_(0);
    this._MAX_VALUE_2 = _UShort___init__impl_(-1);
    this._SIZE_BYTES_2 = 2;
    this._SIZE_BITS_2 = 16;
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function UShort__compareTo_impl(this_0, other) {
    var tmp = _UShort___get_data__impl_(this_0) & 65535;
    return compareTo(tmp, _UShort___get_data__impl_(other) & 65535);
  }
  function UShort__compareTo_impl_0(this_0, other) {
    var tmp = this_0._data_2;
    return UShort__compareTo_impl(tmp, other instanceof UShort ? other._data_2 : THROW_CCE());
  }
  function UShort__toString_impl(this_0) {
    return (_UShort___get_data__impl_(this_0) & 65535).toString();
  }
  function UShort__hashCode_impl(this_0) {
    return this_0;
  }
  function UShort__equals_impl(this_0, other) {
    if (!(other instanceof UShort))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UShort ? other._data_2 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UShort(data) {
    Companion_getInstance_6();
    this._data_2 = data;
  }
  UShort.prototype.compareTo_6 = function (other) {
    return UShort__compareTo_impl(this._data_2, other);
  };
  UShort.prototype.compareTo_14 = function (other) {
    return UShort__compareTo_impl_0(this, other);
  };
  UShort.prototype.toString = function () {
    return UShort__toString_impl(this._data_2);
  };
  UShort.prototype.hashCode = function () {
    return UShort__hashCode_impl(this._data_2);
  };
  UShort.prototype.equals = function (other) {
    return UShort__equals_impl(this._data_2, other);
  };
  UShort.$metadata$ = {
    simpleName: 'UShort',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toULongOrNull(_this_) {
    return toULongOrNull_0(_this_, 10);
  }
  function toUInt(_this_) {
    var tmp0_elvis_lhs = toUIntOrNull(_this_);
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new UInt(tmp_0)) == null) {
      numberFormatError(_this_);
    } else {
      {
        tmp = tmp0_elvis_lhs;
      }
    }
    return tmp;
  }
  function toULong(_this_) {
    var tmp0_elvis_lhs = toULongOrNull(_this_);
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new ULong(tmp_0)) == null) {
      numberFormatError(_this_);
    } else {
      {
        tmp = tmp0_elvis_lhs;
      }
    }
    return tmp;
  }
  function toUByte(_this_) {
    var tmp0_elvis_lhs = toUByteOrNull(_this_);
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new UByte(tmp_0)) == null) {
      numberFormatError(_this_);
    } else {
      {
        tmp = tmp0_elvis_lhs;
      }
    }
    return tmp;
  }
  function toUShort(_this_) {
    var tmp0_elvis_lhs = toUShortOrNull(_this_);
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new UShort(tmp_0)) == null) {
      numberFormatError(_this_);
    } else {
      {
        tmp = tmp0_elvis_lhs;
      }
    }
    return tmp;
  }
  function toULongOrNull_0(_this_, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this_.length;
    if (length === 0)
      return null;
    Companion_getInstance_5();
    var limit = _ULong___init__impl_(new Long(-1, -1));
    var start;
    var firstChar = charSequenceGet(_this_, 0);
    if (firstChar.compareTo_9(new Char(48)) < 0) {
      if (length === 1 ? true : !firstChar.equals(new Char(43)))
        return null;
      start = 1;
    } else {
      start = 0;
    }
    var limitForMaxRadix = _ULong___init__impl_(new Long(477218588, 119304647));
    var limitBeforeMul = limitForMaxRadix;
    var uradix = _ULong___init__impl_(toLong_0(radix));
    var result = _ULong___init__impl_(new Long(0, 0));
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this_, i), radix);
        if (digit < 0)
          return null;
        var tmp0_compareTo_0 = result;
        var tmp1_compareTo_0 = limitBeforeMul;
        if (ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) > 0) {
          if (equals_1(new ULong(limitBeforeMul), new ULong(limitForMaxRadix))) {
            limitBeforeMul = ulongDivide(limit, uradix);
            var tmp2_compareTo_0 = result;
            var tmp3_compareTo_0 = limitBeforeMul;
            if (ulongCompare(_ULong___get_data__impl_(tmp2_compareTo_0), _ULong___get_data__impl_(tmp3_compareTo_0)) > 0) {
              return null;
            } else {
            }
          } else {
            return null;
          }
        } else {
        }
        var tmp4_times_0 = result;
        result = _ULong___init__impl_(_ULong___get_data__impl_(tmp4_times_0).times_27(_ULong___get_data__impl_(uradix)));
        var beforeAdding = result;
        var tmp5_plus_0 = result;
        var tmp6_plus_0 = _UInt___init__impl_(digit);
        var tmp0_plus_0_1 = _ULong___init__impl_(toLong_0(_UInt___get_data__impl_(tmp6_plus_0)).and(new Long(-1, 0)));
        result = _ULong___init__impl_(_ULong___get_data__impl_(tmp5_plus_0).plus_27(_ULong___get_data__impl_(tmp0_plus_0_1)));
        var tmp7_compareTo_0 = result;
        if (ulongCompare(_ULong___get_data__impl_(tmp7_compareTo_0), _ULong___get_data__impl_(beforeAdding)) < 0)
          return null;
        else {
        }
      }
       while (inductionVariable < length);
    return result;
  }
  function toUIntOrNull(_this_) {
    return toUIntOrNull_0(_this_, 10);
  }
  function toUByteOrNull(_this_) {
    return toUByteOrNull_0(_this_, 10);
  }
  function toUShortOrNull(_this_) {
    return toUShortOrNull_0(_this_, 10);
  }
  function toUIntOrNull_0(_this_, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this_.length;
    if (length === 0)
      return null;
    Companion_getInstance_4();
    var limit = _UInt___init__impl_(-1);
    var start;
    var firstChar = charSequenceGet(_this_, 0);
    if (firstChar.compareTo_9(new Char(48)) < 0) {
      if (length === 1 ? true : !firstChar.equals(new Char(43)))
        return null;
      start = 1;
    } else {
      start = 0;
    }
    var limitForMaxRadix = _UInt___init__impl_(119304647);
    var limitBeforeMul = limitForMaxRadix;
    var uradix = _UInt___init__impl_(radix);
    var result = _UInt___init__impl_(0);
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this_, i), radix);
        if (digit < 0)
          return null;
        var tmp0_compareTo_0 = result;
        var tmp1_compareTo_0 = limitBeforeMul;
        if (uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(tmp1_compareTo_0)) > 0) {
          if (equals_1(new UInt(limitBeforeMul), new UInt(limitForMaxRadix))) {
            limitBeforeMul = uintDivide(limit, uradix);
            var tmp2_compareTo_0 = result;
            var tmp3_compareTo_0 = limitBeforeMul;
            if (uintCompare(_UInt___get_data__impl_(tmp2_compareTo_0), _UInt___get_data__impl_(tmp3_compareTo_0)) > 0) {
              return null;
            } else {
            }
          } else {
            return null;
          }
        } else {
        }
        var tmp4_times_0 = result;
        result = _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp4_times_0), _UInt___get_data__impl_(uradix)));
        var beforeAdding = result;
        var tmp5_plus_0 = result;
        var tmp6_plus_0 = _UInt___init__impl_(digit);
        result = _UInt___init__impl_(_UInt___get_data__impl_(tmp5_plus_0) + _UInt___get_data__impl_(tmp6_plus_0) | 0);
        var tmp7_compareTo_0 = result;
        if (uintCompare(_UInt___get_data__impl_(tmp7_compareTo_0), _UInt___get_data__impl_(beforeAdding)) < 0)
          return null;
        else {
        }
      }
       while (inductionVariable < length);
    return result;
  }
  function toUByteOrNull_0(_this_, radix) {
    var tmp0_elvis_lhs = toUIntOrNull_0(_this_, radix);
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new UInt(tmp_0)) == null) {
      return null;
    } else {
      {
        tmp = tmp0_elvis_lhs;
      }
    }
    var int = tmp;
    Companion_getInstance_3();
    var tmp0_compareTo_0 = _UByte___init__impl_(-1);
    var tmp0_compareTo_0_1 = _UInt___init__impl_(_UByte___get_data__impl_(tmp0_compareTo_0) & 255);
    if (uintCompare(_UInt___get_data__impl_(int), _UInt___get_data__impl_(tmp0_compareTo_0_1)) > 0)
      return null;
    else {
    }
    var tmp0_toUByte_0_1 = _UInt___get_data__impl_(int);
    return _UByte___init__impl_(toByte(tmp0_toUByte_0_1));
  }
  function toUShortOrNull_0(_this_, radix) {
    var tmp0_elvis_lhs = toUIntOrNull_0(_this_, radix);
    var tmp;
    var tmp_0 = tmp0_elvis_lhs;
    if ((tmp_0 == null ? null : new UInt(tmp_0)) == null) {
      return null;
    } else {
      {
        tmp = tmp0_elvis_lhs;
      }
    }
    var int = tmp;
    Companion_getInstance_6();
    var tmp0_compareTo_0 = _UShort___init__impl_(-1);
    var tmp0_compareTo_0_1 = _UInt___init__impl_(_UShort___get_data__impl_(tmp0_compareTo_0) & 65535);
    if (uintCompare(_UInt___get_data__impl_(int), _UInt___get_data__impl_(tmp0_compareTo_0_1)) > 0)
      return null;
    else {
    }
    var tmp0_toUShort_0_1 = _UInt___get_data__impl_(int);
    return _UShort___init__impl_(toShort(tmp0_toUShort_0_1));
  }
  function uintCompare(v1, v2) {
    return compareTo(v1 ^ IntCompanionObject_getInstance()._MIN_VALUE_5, v2 ^ IntCompanionObject_getInstance()._MIN_VALUE_5);
  }
  function uintDivide(v1, v2) {
    var tmp = toLong_0(_UInt___get_data__impl_(v1)).and(new Long(-1, 0));
    var tmp0_toUInt_0 = tmp.div_27(toLong_0(_UInt___get_data__impl_(v2)).and(new Long(-1, 0)));
    return _UInt___init__impl_(tmp0_toUInt_0.toInt_5());
  }
  function ulongCompare(v1, v2) {
    Companion_getInstance_11();
    var tmp = v1.xor(new Long(0, -2147483648));
    Companion_getInstance_11();
    return tmp.compareTo_45(v2.xor(new Long(0, -2147483648)));
  }
  function ulongDivide(v1, v2) {
    var dividend = _ULong___get_data__impl_(v1);
    var divisor = _ULong___get_data__impl_(v2);
    if (divisor.compareTo_45(new Long(0, 0)) < 0) {
      var tmp;
      if (ulongCompare(_ULong___get_data__impl_(v1), _ULong___get_data__impl_(v2)) < 0) {
        tmp = _ULong___init__impl_(new Long(0, 0));
      } else {
        {
          tmp = _ULong___init__impl_(new Long(1, 0));
        }
      }
      return tmp;
    }if (dividend.compareTo_45(new Long(0, 0)) >= 0) {
      return _ULong___init__impl_(dividend.div_27(divisor));
    }var quotient = dividend.ushr_0(1).div_27(divisor).shl_0(1);
    var rem = dividend.minus_28(quotient.times_27(divisor));
    var tmp_0;
    var tmp0_compareTo_0 = _ULong___init__impl_(rem);
    var tmp1_compareTo_0 = _ULong___init__impl_(divisor);
    if (ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) >= 0) {
      tmp_0 = 1;
    } else {
      {
        tmp_0 = 0;
      }
    }
    var tmp2_plus_0 = tmp_0;
    return _ULong___init__impl_(quotient.plus_27(toLong_0(tmp2_plus_0)));
  }
  function ulongToString(v) {
    return ulongToString_0(v, 10);
  }
  function ulongToString_0(v, base) {
    if (v.compareTo_45(new Long(0, 0)) >= 0)
      return toString_2(v, base);
    var tmp0_div_0 = v.ushr_0(1);
    var quotient = tmp0_div_0.div_27(toLong_0(base)).shl_0(1);
    var tmp1_times_0 = quotient;
    var rem = v.minus_28(tmp1_times_0.times_27(toLong_0(base)));
    if (rem.compareTo_45(toLong_0(base)) >= 0) {
      var tmp2_minus_0 = rem;
      rem = tmp2_minus_0.minus_28(toLong_0(base));
      var tmp3_plus_0 = quotient;
      var tmp4_plus_0 = 1;
      quotient = tmp3_plus_0.plus_27(toLong_0(tmp4_plus_0));
    }return toString_2(quotient, base) + toString_2(rem, base);
  }
  function Annotation() {
  }
  Annotation.$metadata$ = {
    simpleName: 'Annotation',
    kind: 'interface',
    interfaces: []
  };
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_13 = function () {
    return this.nextInt_0();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first, last_0, step_0) {
    IntIterator.call(this);
    this._step = step_0;
    this._finalElement = last_0;
    this._hasNext = this._step > 0 ? first <= last_0 : first >= last_0;
    this._next = this._hasNext ? first : this._finalElement;
  }
  IntProgressionIterator.prototype.hasNext_13 = function () {
    return this._hasNext;
  };
  IntProgressionIterator.prototype.nextInt_0 = function () {
    var value = this._next;
    if (value === this._finalElement) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next = tmp0_this._next + this._step | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_8() {
    Companion_instance_7 = this;
  }
  Companion_8.prototype.fromClosedRange = function (rangeStart, rangeEnd, step_0) {
    return new IntProgression(rangeStart, rangeEnd, step_0);
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function IntProgression(start, endInclusive, step_0) {
    Companion_getInstance_7();
    if (step_0 === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step_0 === IntCompanionObject_getInstance()._MIN_VALUE_5)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_1 = start;
    this._last = getProgressionLastElement(start, endInclusive, step_0);
    this._step_0 = step_0;
  }
  IntProgression.prototype._get_first__0 = function () {
    return this._first_1;
  };
  IntProgression.prototype._get_last__0 = function () {
    return this._last;
  };
  IntProgression.prototype.iterator_38 = function () {
    return new IntProgressionIterator(this._first_1, this._last, this._step_0);
  };
  IntProgression.prototype.isEmpty_28 = function () {
    return this._step_0 > 0 ? this._first_1 > this._last : this._first_1 < this._last;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_28() ? other.isEmpty_28() : false) ? true : (this._first_1 === other._first_1 ? this._last === other._last : false) ? this._step_0 === other._step_0 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_28() ? -1 : imul(31, imul(31, this._first_1) + this._last | 0) + this._step_0 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_0 > 0 ? '' + this._first_1 + '..' + this._last + ' step ' + this._step_0 : '' + this._first_1 + ' downTo ' + this._last + ' step ' + (-this._step_0 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_9() {
    Companion_instance_8 = this;
    this._EMPTY = new IntRange(1, 0);
  }
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_9();
    return Companion_instance_8;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_8();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start_ = function () {
    return this._get_first__0();
  };
  IntRange.prototype._get_endInclusive_ = function () {
    return this._get_last__0();
  };
  IntRange.prototype.isEmpty_28 = function () {
    return this._get_first__0() > this._get_last__0();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_28() ? other.isEmpty_28() : false) ? true : this._get_first__0() === other._get_first__0() ? this._get_last__0() === other._get_last__0() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_28() ? -1 : imul(31, this._get_first__0()) + this._get_last__0() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__0() + '..' + this._get_last__0();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step_0) {
    var tmp;
    if (step_0 > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step_0) | 0;
    } else if (step_0 < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step_0 | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod_0 = a % b;
    return mod_0 >= 0 ? mod_0 : mod_0 + b | 0;
  }
  function ByteCompanionObject_0() {
    ByteCompanionObject_instance = this;
    this._MIN_VALUE_3 = -128;
    this._MAX_VALUE_3 = 127;
    this._SIZE_BYTES_3 = 1;
    this._SIZE_BITS_3 = 8;
  }
  ByteCompanionObject_0.prototype._get_MIN_VALUE__3 = function () {
    return this._MIN_VALUE_3;
  };
  ByteCompanionObject_0.prototype._get_MAX_VALUE__3 = function () {
    return this._MAX_VALUE_3;
  };
  ByteCompanionObject_0.prototype._get_SIZE_BYTES__3 = function () {
    return this._SIZE_BYTES_3;
  };
  ByteCompanionObject_0.prototype._get_SIZE_BITS__3 = function () {
    return this._SIZE_BITS_3;
  };
  ByteCompanionObject_0.$metadata$ = {
    simpleName: 'ByteCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(ByteCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_MIN_VALUE__3
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_MAX_VALUE__3
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_SIZE_BYTES__3
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_SIZE_BITS__3
  });
  var ByteCompanionObject_instance;
  function ByteCompanionObject_getInstance() {
    if (ByteCompanionObject_instance == null)
      new ByteCompanionObject_0();
    return ByteCompanionObject_instance;
  }
  function ShortCompanionObject_0() {
    ShortCompanionObject_instance = this;
    this._MIN_VALUE_4 = -32768;
    this._MAX_VALUE_4 = 32767;
    this._SIZE_BYTES_4 = 2;
    this._SIZE_BITS_4 = 16;
  }
  ShortCompanionObject_0.prototype._get_MIN_VALUE__3 = function () {
    return this._MIN_VALUE_4;
  };
  ShortCompanionObject_0.prototype._get_MAX_VALUE__3 = function () {
    return this._MAX_VALUE_4;
  };
  ShortCompanionObject_0.prototype._get_SIZE_BYTES__3 = function () {
    return this._SIZE_BYTES_4;
  };
  ShortCompanionObject_0.prototype._get_SIZE_BITS__3 = function () {
    return this._SIZE_BITS_4;
  };
  ShortCompanionObject_0.$metadata$ = {
    simpleName: 'ShortCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(ShortCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_MIN_VALUE__3
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_MAX_VALUE__3
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_SIZE_BYTES__3
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_SIZE_BITS__3
  });
  var ShortCompanionObject_instance;
  function ShortCompanionObject_getInstance() {
    if (ShortCompanionObject_instance == null)
      new ShortCompanionObject_0();
    return ShortCompanionObject_instance;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE_5 = -2147483648;
    this._MAX_VALUE_5 = 2147483647;
    this._SIZE_BYTES_5 = 4;
    this._SIZE_BITS_5 = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__3 = function () {
    return this._MIN_VALUE_5;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE__3 = function () {
    return this._MAX_VALUE_5;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES__3 = function () {
    return this._SIZE_BYTES_5;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS__3 = function () {
    return this._SIZE_BITS_5;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__3
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__3
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__3
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__3
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function FloatCompanionObject_0() {
    FloatCompanionObject_instance = this;
    this._MIN_VALUE_6 = 1.4E-45;
    this._MAX_VALUE_6 = 3.4028235E38;
    this._POSITIVE_INFINITY = Infinity;
    this._NEGATIVE_INFINITY = -Infinity;
    this._NaN = NaN;
    this._SIZE_BYTES_6 = 4;
    this._SIZE_BITS_6 = 32;
  }
  FloatCompanionObject_0.prototype._get_MIN_VALUE__3 = function () {
    return this._MIN_VALUE_6;
  };
  FloatCompanionObject_0.prototype._get_MAX_VALUE__3 = function () {
    return this._MAX_VALUE_6;
  };
  FloatCompanionObject_0.prototype._get_POSITIVE_INFINITY__0 = function () {
    return this._POSITIVE_INFINITY;
  };
  FloatCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0 = function () {
    return this._NEGATIVE_INFINITY;
  };
  FloatCompanionObject_0.prototype._get_NaN__0 = function () {
    return this._NaN;
  };
  FloatCompanionObject_0.prototype._get_SIZE_BYTES__3 = function () {
    return this._SIZE_BYTES_6;
  };
  FloatCompanionObject_0.prototype._get_SIZE_BITS__3 = function () {
    return this._SIZE_BITS_6;
  };
  FloatCompanionObject_0.$metadata$ = {
    simpleName: 'FloatCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(FloatCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_MIN_VALUE__3
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_MAX_VALUE__3
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_POSITIVE_INFINITY__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'NaN', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_NaN__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_SIZE_BYTES__3
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_SIZE_BITS__3
  });
  var FloatCompanionObject_instance;
  function FloatCompanionObject_getInstance() {
    if (FloatCompanionObject_instance == null)
      new FloatCompanionObject_0();
    return FloatCompanionObject_instance;
  }
  function DoubleCompanionObject_0() {
    DoubleCompanionObject_instance = this;
    this._MIN_VALUE_7 = 4.9E-324;
    this._MAX_VALUE_7 = 1.7976931348623157E308;
    this._POSITIVE_INFINITY_0 = Infinity;
    this._NEGATIVE_INFINITY_0 = -Infinity;
    this._NaN_0 = NaN;
    this._SIZE_BYTES_7 = 8;
    this._SIZE_BITS_7 = 64;
  }
  DoubleCompanionObject_0.prototype._get_MIN_VALUE__3 = function () {
    return this._MIN_VALUE_7;
  };
  DoubleCompanionObject_0.prototype._get_MAX_VALUE__3 = function () {
    return this._MAX_VALUE_7;
  };
  DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0 = function () {
    return this._POSITIVE_INFINITY_0;
  };
  DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0 = function () {
    return this._NEGATIVE_INFINITY_0;
  };
  DoubleCompanionObject_0.prototype._get_NaN__0 = function () {
    return this._NaN_0;
  };
  DoubleCompanionObject_0.prototype._get_SIZE_BYTES__3 = function () {
    return this._SIZE_BYTES_7;
  };
  DoubleCompanionObject_0.prototype._get_SIZE_BITS__3 = function () {
    return this._SIZE_BITS_7;
  };
  DoubleCompanionObject_0.$metadata$ = {
    simpleName: 'DoubleCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MIN_VALUE__3
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MAX_VALUE__3
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'NaN', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NaN__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BYTES__3
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BITS__3
  });
  var DoubleCompanionObject_instance;
  function DoubleCompanionObject_getInstance() {
    if (DoubleCompanionObject_instance == null)
      new DoubleCompanionObject_0();
    return DoubleCompanionObject_instance;
  }
  function StringCompanionObject() {
    StringCompanionObject_instance = this;
  }
  StringCompanionObject.$metadata$ = {
    simpleName: 'StringCompanionObject',
    kind: 'object',
    interfaces: []
  };
  var StringCompanionObject_instance;
  function StringCompanionObject_getInstance() {
    if (StringCompanionObject_instance == null)
      new StringCompanionObject();
    return StringCompanionObject_instance;
  }
  function BooleanCompanionObject() {
    BooleanCompanionObject_instance = this;
  }
  BooleanCompanionObject.$metadata$ = {
    simpleName: 'BooleanCompanionObject',
    kind: 'object',
    interfaces: []
  };
  var BooleanCompanionObject_instance;
  function BooleanCompanionObject_getInstance() {
    if (BooleanCompanionObject_instance == null)
      new BooleanCompanionObject();
    return BooleanCompanionObject_instance;
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function mapOf_0(pair) {
    return hashMapOf([pair]);
  }
  function listOf(element) {
    return arrayListOf([element]);
  }
  function copyToArray_0(collection) {
    var tmp;
    if (collection.toArray !== undefined) {
      var tmp0_unsafeCast_0 = collection.toArray();
      tmp = tmp0_unsafeCast_0;
    } else {
      {
        var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
        tmp = tmp1_unsafeCast_0;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var array = [];
    var iterator = collection.iterator_38();
    while (iterator.hasNext_13()) {
      array.push(iterator.next_13());
    }
    return array;
  }
  function setOf_0(element) {
    return hashSetOf([element]);
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }return index;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.addAll_9 = function (elements) {
    this.checkIsMutable_11();
    var modified = false;
    var tmp0_iterator = elements.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var element = tmp0_iterator.next_13();
      if (this.add_16(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_11 = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index_1 = 0;
    this._last_0 = -1;
  }
  IteratorImpl.prototype.hasNext_13 = function () {
    return this._index_1 < this._$this._get_size__28();
  };
  IteratorImpl.prototype.next_13 = function () {
    if (!this.hasNext_13())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index_1;
    tmp0_this._index_1 = tmp1 + 1 | 0;
    tmp._last_0 = tmp1;
    return this._$this.get_28(this._last_0);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__0 = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0 = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_16 = function (element) {
    this.checkIsMutable_11();
    this.add_7(this._get_size__28(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_38 = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_26 = function (element) {
    return this.indexOf_5(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_5 = function (element) {
    var inductionVariable = 0;
    var last_0 = _get_lastIndex__0(this);
    if (inductionVariable <= last_0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_1(this.get_28(index), element)) {
          return index;
        }}
       while (!(index === last_0));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function _no_name_provided__10($entryIterator) {
    this._$entryIterator_0 = $entryIterator;
  }
  _no_name_provided__10.prototype.hasNext_13 = function () {
    return this._$entryIterator_0.hasNext_13();
  };
  _no_name_provided__10.prototype.next_13 = function () {
    return this._$entryIterator_0.next_13()._get_key__3();
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key = key;
    this.__value_0 = value;
  }
  SimpleEntry.prototype._get_key__3 = function () {
    return this._key;
  };
  SimpleEntry.prototype._get_value__14 = function () {
    return this.__value_0;
  };
  SimpleEntry.prototype.setValue_1 = function (newValue) {
    var oldValue = this.__value_0;
    this.__value_0 = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_26 = function (element) {
    return this.containsEntry_4(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11(this$0) {
    this._this$0_4 = this$0;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__11.prototype.add_3 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__11.prototype.add_16 = function (element) {
    return this.add_3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__11.prototype.contains_19 = function (element) {
    return this._this$0_4.containsKey_8(element);
  };
  _no_name_provided__11.prototype.contains_26 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_19((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__11.prototype.iterator_38 = function () {
    var entryIterator = this._this$0_4._get_entries__5().iterator_38();
    return new _no_name_provided__10(entryIterator);
  };
  _no_name_provided__11.prototype._get_size__28 = function () {
    return this._this$0_4._get_size__28();
  };
  _no_name_provided__11.prototype.checkIsMutable_11 = function () {
    return this._this$0_4.checkIsMutable_11();
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype._get_keys__5 = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__11(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.prototype.putAll_1 = function (from) {
    this.checkIsMutable_11();
    var tmp0_iterator = from._get_entries__5().iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var tmp1_loop_parameter = tmp0_iterator.next_13();
      var key = tmp1_loop_parameter._get_key__3();
      var value = tmp1_loop_parameter._get_value__14();
      this.put_4(key, value);
      Unit_getInstance();
    }
  };
  AbstractMutableMap.prototype.checkIsMutable_11 = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    ArrayList.call($this, copyToArray_0(elements));
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__28());
    return index;
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__28());
    return index;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype.ensureCapacity_8 = function (minCapacity) {
  };
  ArrayList.prototype._get_size__28 = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_28 = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_16 = function (element) {
    this.checkIsMutable_11();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_7 = function (index, element) {
    this.checkIsMutable_11();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_9 = function (elements) {
    this.checkIsMutable_11();
    if (elements.isEmpty_28())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp0_plus_0 = tmp0_this._array;
    var tmp1_plus_0 = copyToArray_0(elements);
    tmp._array = tmp0_plus_0.concat(tmp1_plus_0);
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__0();
    tmp1_this._set_modCount__0(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.removeAt_1 = function (index) {
    this.checkIsMutable_11();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
    var tmp;
    if (index === _get_lastIndex__0(this)) {
      var tmp0_asDynamic_0 = this._array;
      tmp = tmp0_asDynamic_0.pop();
    } else {
      var tmp1_asDynamic_0 = this._array;
      tmp = tmp1_asDynamic_0.splice(index, 1)[0];
    }
    return tmp;
  };
  ArrayList.prototype.indexOf_5 = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0 = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0();
  };
  ArrayList.prototype.checkIsMutable_11 = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_1 = function (value1, value2) {
    return equals_1(value1, value2);
  };
  HashCode.prototype.getHashCode_0 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_0 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_11 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_16 = function (element) {
    return this.add_11((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_4 = function (element) {
    return this._$this_0.containsEntry_5(element);
  };
  EntrySet.prototype.iterator_38 = function () {
    return this._$this_0._internalMap.iterator_38();
  };
  EntrySet.prototype._get_size__28 = function () {
    return this._$this_0._get_size__28();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    var tmp0_require_0 = initialCapacity >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp1_require_0 = loadFactor >= 0;
    if (!tmp1_require_0) {
      var message_1_0 = '' + 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_0));
    }return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_2(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashMap_init_$Create$_1(initialCapacity) {
    return HashMap_init_$Init$_2(initialCapacity, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_3(original, $this) {
    HashMap_init_$Init$_0($this);
    $this.putAll_1(original);
    return $this;
  }
  function HashMap_init_$Create$_2(original) {
    return HashMap_init_$Init$_3(original, Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_8 = function (key) {
    return this._internalMap.contains_19(key);
  };
  HashMap.prototype._get_entries__5 = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0 = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_16 = function (key) {
    return this._internalMap.get_16(key);
  };
  HashMap.prototype.put_4 = function (key, value) {
    return this._internalMap.put_4(key, value);
  };
  HashMap.prototype._get_size__28 = function () {
    return this._internalMap._get_size__28();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$($this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$();
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$(Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_0(elements, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_1(elements._get_size__28());
    $this.addAll_9(elements);
    Unit_getInstance();
    return $this;
  }
  function HashSet_init_$Create$_0(elements) {
    return HashSet_init_$Init$_0(elements, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_2(initialCapacity, $this) {
    HashSet_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_1(initialCapacity) {
    return HashSet_init_$Init$_2(initialCapacity, Object.create(HashSet.prototype));
  }
  function HashSet_init_$Init$_3(map_0, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = map_0;
    return $this;
  }
  HashSet.prototype._get_map__0 = function () {
    return this._map;
  };
  HashSet.prototype.add_16 = function (element) {
    var old = this._map.put_4(element, this);
    return old == null;
  };
  HashSet.prototype.contains_26 = function (element) {
    return this._map.containsKey_8(element);
  };
  HashSet.prototype.isEmpty_28 = function () {
    return this._map.isEmpty_28();
  };
  HashSet.prototype.iterator_38 = function () {
    return this._map._get_keys__5().iterator_38();
  };
  HashSet.prototype._get_size__28 = function () {
    return this._map._get_size__28();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp0_unsafeCast_0 = $this._chainOrEntry;
      var chainSize = tmp0_unsafeCast_0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_5._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_0(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_1(entry._get_key__3(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if ($this._equality_0.equals_1(element_2._get_key__3(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__12(this$0) {
    this._this$0_5 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_5._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__12.prototype.hasNext_13 = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__12.prototype.next_13 = function () {
    if (!this.hasNext_13())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp0_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp0_unsafeCast_0[this._itemIndex];
    } else {
      var tmp1_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp1_unsafeCast_0;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0 = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__28 = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_4 = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_0(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_1(entry._get_key__3(), key)) {
          return entry.setValue_1(value);
        } else {
          var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
          this._backingMap[hashCode_1] = tmp0_arrayOf_0;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_1(value);
          }chain.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.contains_19 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_16 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__14();
  };
  InternalHashCodeMap.prototype.iterator_38 = function () {
    return new _no_name_provided__12(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0 = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function EntryIterator($outer) {
    this._$this_1 = $outer;
    this._last_1 = null;
    this._next_0 = null;
    this._next_0 = this._$this_1._$this_3._head;
  }
  EntryIterator.prototype.hasNext_13 = function () {
    return !(this._next_0 === null);
  };
  EntryIterator.prototype.next_13 = function () {
    if (!this.hasNext_13())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this._next_0);
    this._last_1 = current;
    var tmp = this;
    var tmp0_takeIf_0 = current._next_1;
    var tmp_0;
    if (!(tmp0_takeIf_0 === this._$this_1._$this_3._head)) {
      tmp_0 = tmp0_takeIf_0;
    } else {
      {
        tmp_0 = null;
      }
    }
    tmp._next_0 = tmp_0;
    return current;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this._$this_2 = $outer;
    SimpleEntry.call(this, key, value);
    this._next_1 = null;
    this._prev = null;
  }
  ChainEntry.prototype.setValue_1 = function (newValue) {
    this._$this_2.checkIsMutable_11();
    return SimpleEntry.prototype.setValue_1.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this._$this_3 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_11 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_16 = function (element) {
    return this.add_11((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.containsEntry_4 = function (element) {
    return this._$this_3.containsEntry_5(element);
  };
  EntrySet_0.prototype.iterator_38 = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype._get_size__28 = function () {
    return this._$this_3._get_size__28();
  };
  EntrySet_0.prototype.checkIsMutable_11 = function () {
    return this._$this_3.checkIsMutable_11();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function addToEnd(_this_, $this) {
    var tmp0_check_0 = _this_._next_1 == null ? _this_._prev == null : false;
    if (!tmp0_check_0) {
      var message_2_1 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString_1(message_2_1));
    }var _head = $this._head;
    if (_head == null) {
      $this._head = _this_;
      _this_._next_1 = _this_;
      _this_._prev = _this_;
    } else {
      var tmp1_checkNotNull_0 = _head._prev;
      var tmp$ret$0;
      l$ret$1: do {
        if (tmp1_checkNotNull_0 == null) {
          var message_2_1_0 = 'Required value was null.';
          throw IllegalStateException_init_$Create$(toString_1(message_2_1_0));
        } else {
          tmp$ret$0 = tmp1_checkNotNull_0;
          break l$ret$1;
        }
      }
       while (false);
      var _tail = tmp$ret$0;
      _this_._prev = _tail;
      _this_._next_1 = _head;
      _head._prev = _this_;
      _tail._next_1 = _this_;
    }
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_0(initialCapacity, loadFactor, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(initialCapacity) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_2(original, $this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$();
    $this.putAll_1(original);
    return $this;
  }
  function LinkedHashMap_init_$Create$_2(original) {
    return LinkedHashMap_init_$Init$_2(original, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.containsKey_8 = function (key) {
    return this._map_0.containsKey_8(key);
  };
  LinkedHashMap.prototype.createEntrySet_0 = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_16 = function (key) {
    var tmp0_safe_receiver = this._map_0.get_16(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__14();
  };
  LinkedHashMap.prototype.put_4 = function (key, value) {
    this.checkIsMutable_11();
    var old = this._map_0.get_16(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this._map_0.put_4(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_1(value);
    }
  };
  LinkedHashMap.prototype._get_size__28 = function () {
    return this._map_0._get_size__28();
  };
  LinkedHashMap.prototype.checkIsMutable_11 = function () {
    if (this._isReadOnly_0)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this._head = null;
    this._isReadOnly_0 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_3(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_0(elements, $this) {
    HashSet_init_$Init$_3(LinkedHashMap_init_$Create$(), $this);
    LinkedHashSet.call($this);
    $this.addAll_9(elements);
    Unit_getInstance();
    return $this;
  }
  function LinkedHashSet_init_$Create$_0(elements) {
    return LinkedHashSet_init_$Init$_0(elements, Object.create(LinkedHashSet.prototype));
  }
  function LinkedHashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_3(LinkedHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_2(initialCapacity, $this) {
    LinkedHashSet_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_1(initialCapacity) {
    return LinkedHashSet_init_$Init$_2(initialCapacity, Object.create(LinkedHashSet.prototype));
  }
  LinkedHashSet.prototype.checkIsMutable_11 = function () {
    return this._get_map__0().checkIsMutable_11();
  };
  function LinkedHashSet() {
  }
  LinkedHashSet.$metadata$ = {
    simpleName: 'LinkedHashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_5 = function () {
    this.print_2('\n');
  };
  BaseOutput.prototype.println_6 = function (message) {
    this.print_2(message);
    this.println_5();
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput_0(outputStream) {
    BaseOutput.call(this);
    this._outputStream = outputStream;
  }
  NodeJsOutput_0.prototype.print_2 = function (message) {
    var messageString = String(message);
    this._outputStream.write(messageString);
  };
  NodeJsOutput_0.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog_0() {
    BufferedOutput_0.call(this);
  }
  BufferedOutputToConsoleLog_0.prototype.print_2 = function (message) {
    var s = String(message);
    var tmp0_nativeLastIndexOf_0 = s;
    var tmp1_nativeLastIndexOf_0 = '\n';
    var tmp2_nativeLastIndexOf_0 = 0;
    var i = tmp0_nativeLastIndexOf_0.lastIndexOf(tmp1_nativeLastIndexOf_0, tmp2_nativeLastIndexOf_0);
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this._get_buffer__0();
      var tmp3_substring_0 = s;
      var tmp4_substring_0 = 0;
      tmp0_this._set_buffer__0(tmp + tmp3_substring_0.substring(tmp4_substring_0, i));
      this.flush();
      var tmp5_substring_0 = s;
      var tmp6_substring_0 = i + 1 | 0;
      s = tmp5_substring_0.substring(tmp6_substring_0);
    }var tmp1_this = this;
    tmp1_this._set_buffer__0(tmp1_this._get_buffer__0() + s);
  };
  BufferedOutputToConsoleLog_0.prototype.flush = function () {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].concat([this._get_buffer__0()]));
    }.call(this));
    this._set_buffer__0('');
  };
  BufferedOutputToConsoleLog_0.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutput_0() {
    BaseOutput.call(this);
    this._buffer = '';
  }
  BufferedOutput_0.prototype._set_buffer__0 = function (_set___) {
    this._buffer = _set___;
  };
  BufferedOutput_0.prototype._get_buffer__0 = function () {
    return this._buffer;
  };
  BufferedOutput_0.prototype.print_2 = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._buffer;
    tmp._buffer = tmp_0 + String(message);
  };
  BufferedOutput_0.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function println(message) {
    output.println_6(message);
  }
  function output$init$() {
    var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
    return isNode_2 ? new NodeJsOutput_0(process.stdout) : new BufferedOutputToConsoleLog_0();
  }
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function isFinite(_this_) {
    return !isInfinite(_this_) ? !isNaN_1(_this_) : false;
  }
  function isFinite_0(_this_) {
    return !isInfinite_0(_this_) ? !isNaN_0(_this_) : false;
  }
  function rotateLeft(_this_, bitCount) {
    var tmp = _this_ << bitCount;
    IntCompanionObject_getInstance();
    return tmp | _this_ >>> (32 - bitCount | 0);
  }
  function isInfinite(_this_) {
    var tmp;
    FloatCompanionObject_getInstance();
    if (_this_ === Infinity) {
      tmp = true;
    } else {
      {
        FloatCompanionObject_getInstance();
        tmp = _this_ === -Infinity;
      }
    }
    return tmp;
  }
  function isNaN_1(_this_) {
    return !(_this_ === _this_);
  }
  function isInfinite_0(_this_) {
    var tmp;
    DoubleCompanionObject_getInstance();
    if (_this_ === Infinity) {
      tmp = true;
    } else {
      {
        DoubleCompanionObject_getInstance();
        tmp = _this_ === -Infinity;
      }
    }
    return tmp;
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__2 = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_1(this._get_jClass__2(), other._get_jClass__2());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__4();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__4 = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.prototype.isInstance_4 = function (value) {
    return this._isInstanceFunction(value);
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype.isInstance_4 = function (value) {
    return false;
  };
  NothingKClassImpl.prototype._get_jClass__2 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__4 = function () {
    var tmp0_error_0 = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype.isInstance_4 = function (value) {
    var tmp0_error_0 = "Can's check isInstance on ErrorKClass";
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp0_safe_receiver = jClass.$metadata$;
    var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp._simpleName_0 = tmp0_unsafeCast_0;
  }
  SimpleKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.prototype.isInstance_4 = function (value) {
    return jsIsType(value, this._get_jClass__2());
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function KFunction() {
  }
  KFunction.$metadata$ = {
    simpleName: 'KFunction',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KProperty1() {
  }
  KProperty1.$metadata$ = {
    simpleName: 'KProperty1',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty() {
  }
  KProperty.$metadata$ = {
    simpleName: 'KProperty',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KType() {
  }
  KType.$metadata$ = {
    simpleName: 'KType',
    kind: 'interface',
    interfaces: []
  };
  function createKType_0(classifier, arguments_0, isMarkedNullable) {
    return new KTypeImpl(classifier, asList(arguments_0), isMarkedNullable);
  }
  function createInvariantKTypeProjection_0(type) {
    return Companion_getInstance_2().invariant(type);
  }
  function asString(_this_, $this) {
    if (_this_._variance == null)
      return '*';
    return prefixString(_this_._variance) + toString_0(_this_._type);
  }
  function _no_name_provided__13(this$0) {
    this._this$0_6 = this$0;
  }
  _no_name_provided__13.prototype.invoke_12 = function (it) {
    return asString(it, this._this$0_6);
  };
  _no_name_provided__13.prototype.invoke_95 = function (p1) {
    return this.invoke_12(p1 instanceof KTypeProjection ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function KTypeImpl(classifier, arguments_0, isMarkedNullable) {
    this._classifier = classifier;
    this._arguments = arguments_0;
    this._isMarkedNullable = isMarkedNullable;
  }
  KTypeImpl.prototype._get_classifier__0 = function () {
    return this._classifier;
  };
  KTypeImpl.prototype._get_arguments__0 = function () {
    return this._arguments;
  };
  KTypeImpl.prototype._get_isMarkedNullable__0 = function () {
    return this._isMarkedNullable;
  };
  KTypeImpl.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof KTypeImpl) {
      tmp_1 = equals_1(this._classifier, other._classifier);
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      tmp_0 = equals_1(this._arguments, other._arguments);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = this._isMarkedNullable === other._isMarkedNullable;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KTypeImpl.prototype.hashCode = function () {
    return imul(imul(hashCode(this._classifier), 31) + hashCode(this._arguments) | 0, 31) + (this._isMarkedNullable | 0) | 0;
  };
  KTypeImpl.prototype.toString = function () {
    var tmp = this._classifier;
    var kClass = isInterface(tmp, KClass) ? tmp : null;
    var classifierName = kClass == null ? toString_1(this._classifier) : !(kClass._get_simpleName__4() == null) ? kClass._get_simpleName__4() : '(non-denotable type)';
    var tmp_0;
    if (this._arguments.isEmpty_28()) {
      tmp_0 = '';
    } else {
      tmp_0 = joinToString$default_0(this._arguments, ', ', '<', '>', 0, null, _no_name_provided_$factory_6(this), 24, null);
    }
    var args = tmp_0;
    var nullable_0 = this._isMarkedNullable ? '?' : '';
    return plus_0(classifierName, args) + nullable_0;
  };
  KTypeImpl.$metadata$ = {
    simpleName: 'KTypeImpl',
    kind: 'class',
    interfaces: [KType]
  };
  function prefixString(_this_) {
    var tmp0_subject = _this_;
    var tmp;
    if (tmp0_subject.equals(KVariance_INVARIANT_getInstance())) {
      tmp = '';
    } else if (tmp0_subject.equals(KVariance_IN_getInstance())) {
      tmp = 'in ';
    } else if (tmp0_subject.equals(KVariance_OUT_getInstance())) {
      tmp = 'out ';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function _no_name_provided_$factory_6(this$0) {
    var i = new _no_name_provided__13(this$0);
    return function (p1) {
      return i.invoke_12(p1);
    };
  }
  var functionClasses;
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_54 = function (it) {
    return isObject(it);
  };
  _no_name_provided__14.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_54 = function (it) {
    return isNumber(it);
  };
  _no_name_provided__15.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_54 = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__16.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_54 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__17.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_54 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__18.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_54 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__19.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_54 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__20.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_54 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__21.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_54 = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__22.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_54 = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__23.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_54 = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__24.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25() {
  }
  _no_name_provided__25.prototype.invoke_54 = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__25.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__26() {
  }
  _no_name_provided__26.prototype.invoke_54 = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__26.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__27() {
  }
  _no_name_provided__27.prototype.invoke_54 = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__27.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28() {
  }
  _no_name_provided__28.prototype.invoke_54 = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__28.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__29() {
  }
  _no_name_provided__29.prototype.invoke_54 = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__29.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__30() {
  }
  _no_name_provided__30.prototype.invoke_54 = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__30.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__31() {
  }
  _no_name_provided__31.prototype.invoke_54 = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__31.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__32() {
  }
  _no_name_provided__32.prototype.invoke_54 = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__32.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__33($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__33.prototype.invoke_54 = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__33.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_7());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_8());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_9());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_10());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_11());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_12());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_13());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_14());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_15());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_16());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_17());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_18());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_19());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_20());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_21());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_22());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_23());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_24());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_25());
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass_ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass_ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass_ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass_ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass_ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass_ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass_ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass_ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass_ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass_ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass_ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = tmp0_unsafeCast_0_3;
      var tmp_1 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_26(arity));
      var tmp1_asDynamic_0_5 = functionClasses;
      tmp1_asDynamic_0_5[arity] = result_2;
      tmp = result_2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__25();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__26();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__27();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__28();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__29();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_23() {
    var i = new _no_name_provided__30();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_24() {
    var i = new _no_name_provided__31();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_25() {
    var i = new _no_name_provided__32();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function _no_name_provided_$factory_26($arity) {
    var i = new _no_name_provided__33($arity);
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass);
    } else {
      tmp = getKClass1_0(jClass);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
        tmp = tmp0_unsafeCast_0;
        break;
      default:var tmp1_unsafeCast_0 = new ErrorKClass();
        tmp = tmp1_unsafeCast_0;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
      return tmp0_unsafeCast_0;
    }var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance()._stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
        if (tmp0_asDynamic_0 === e) {
          tmp_0 = PrimitiveClasses_getInstance()._intClass;
        } else {
          {
            tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
          }
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance()._booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        tmp = tmp_1.functionClass(e.length);
        break;
      default:var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass_0(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                          } else {
                            {
                              var constructor = Object.getPrototypeOf(e).constructor;
                              var tmp_3;
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                              } else {
                                var jsClass_0 = constructor;
                                tmp_3 = getKClass1_0(jsClass_0);
                              }
                              tmp_2 = tmp_3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast_0 = tmp;
    return tmp1_unsafeCast_0;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function CharacterCodingException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, CharacterCodingException);
  }
  CharacterCodingException.$metadata$ = {
    simpleName: 'CharacterCodingException',
    kind: 'class',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0 = function () {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.length;
  };
  StringBuilder.prototype.get_28 = function (index) {
    var tmp0_getOrElse_0 = this._string;
    var tmp;
    if (index >= 0 ? index <= _get_lastIndex__1(tmp0_getOrElse_0) : false) {
      tmp = charSequenceGet(tmp0_getOrElse_0, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', length: ' + this._get_length__0() + '}');
    }
    return tmp;
  };
  StringBuilder.prototype.subSequence_1 = function (startIndex, endIndex) {
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex, endIndex);
  };
  StringBuilder.prototype.append_1 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_2 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_3 = function (value, startIndex, endIndex) {
    var tmp0_elvis_lhs = value;
    return this.appendRange(tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs, startIndex, endIndex);
  };
  StringBuilder.prototype.append_4 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_5 = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.setLength = function (newLength) {
    if (newLength < 0) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Negative new length: ' + newLength + '.');
    }if (newLength <= this._get_length__0()) {
      var tmp = this;
      var tmp0_substring_0 = this._string;
      var tmp1_substring_0 = 0;
      tmp._string = tmp0_substring_0.substring(tmp1_substring_0, newLength);
    } else {
      var inductionVariable = this._get_length__0();
      if (inductionVariable < newLength)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp1_this = this;
          tmp1_this._string = tmp1_this._string + new Char(0);
        }
         while (inductionVariable < newLength);
    }
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.prototype.appendRange = function (value, startIndex, endIndex) {
    var stringCsq = toString_1(value);
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, stringCsq.length);
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    tmp._string = tmp_0 + stringCsq.substring(startIndex, endIndex);
    return this;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function uppercaseChar(_this_) {
    var tmp0_asDynamic_0 = _this_.toString();
    var tmp1_unsafeCast_0 = tmp0_asDynamic_0.toUpperCase();
    var uppercase = tmp1_unsafeCast_0;
    return uppercase.length > 1 ? _this_ : charSequenceGet(uppercase, 0);
  }
  function isWhitespace(_this_) {
    return isWhitespaceImpl(_this_);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$_0('' + 'radix ' + radix + ' was not in valid range 2..36');
    }return radix;
  }
  function digitOf(char, radix) {
    var tmp0_let_0 = (char.compareTo_9(new Char(48)) >= 0 ? char.compareTo_9(new Char(57)) <= 0 : false) ? char.minus(new Char(48)) : (char.compareTo_9(new Char(65)) >= 0 ? char.compareTo_9(new Char(90)) <= 0 : false) ? char.minus(new Char(65)) + 10 | 0 : (char.compareTo_9(new Char(97)) >= 0 ? char.compareTo_9(new Char(122)) <= 0 : false) ? char.minus(new Char(97)) + 10 | 0 : -1;
    return tmp0_let_0 >= radix ? -1 : tmp0_let_0;
  }
  function toDouble(_this_) {
    var tmp0_unsafeCast_0 = +_this_;
    var tmp1_also_0 = tmp0_unsafeCast_0;
    if ((isNaN_0(tmp1_also_0) ? !isNaN_2(_this_) : false) ? true : tmp1_also_0 === 0.0 ? isBlank(_this_) : false) {
      numberFormatError(_this_);
    }return tmp1_also_0;
  }
  function toInt(_this_) {
    var tmp0_elvis_lhs = toIntOrNull(_this_);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this_);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function toDoubleOrNull(_this_) {
    var tmp0_unsafeCast_0 = +_this_;
    var tmp1_takeIf_0 = tmp0_unsafeCast_0;
    var tmp;
    if (!((isNaN_0(tmp1_takeIf_0) ? !isNaN_2(_this_) : false) ? true : tmp1_takeIf_0 === 0.0 ? isBlank(_this_) : false)) {
      tmp = tmp1_takeIf_0;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function toLong(_this_) {
    var tmp0_elvis_lhs = toLongOrNull(_this_);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this_);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isNaN_2(_this_) {
    var tmp0_subject = _this_.toLowerCase();
    switch (tmp0_subject) {
      case 'nan':
      case '+nan':
      case '-nan':
        return true;
      default:return false;
    }
  }
  function encodeToByteArray(_this_) {
    return encodeUtf8(_this_, 0, _this_.length, false);
  }
  function isBlank(_this_) {
    var tmp;
    if (charSequenceLength(_this_) === 0) {
      tmp = true;
    } else {
      var tmp_0;
      if (typeof _this_ === 'string') {
        tmp_0 = _this_;
      } else {
        {
          tmp_0 = toString_1(_this_);
        }
      }
      tmp = matches(tmp_0, '^[\\s\\xA0]+$');
    }
    return tmp;
  }
  function matches(_this_, regex) {
    var result = _this_.match(regex);
    return !(result == null) ? !(result.length === 0) : false;
  }
  function equals_0(_this_, other, ignoreCase) {
    var tmp;
    if (_this_ == null) {
      tmp = other == null;
    } else if (!ignoreCase) {
      tmp = _this_ == other;
    } else if (other == null) {
      tmp = false;
    } else {
      var thisLower = _this_.toLowerCase();
      var otherLower = other.toLowerCase();
      var tmp_0;
      if (thisLower === otherLower) {
        tmp_0 = true;
      } else {
        var tmp_1 = thisLower.toUpperCase();
        tmp_0 = tmp_1 === otherLower.toUpperCase();
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function startsWith(_this_, prefix, ignoreCase) {
    if (!ignoreCase) {
      var tmp0_nativeStartsWith_0 = 0;
      return _this_.startsWith(prefix, tmp0_nativeStartsWith_0);
    } else
      return regionMatches(_this_, 0, prefix, 0, prefix.length, ignoreCase);
  }
  function startsWith$default(_this_, prefix, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return startsWith(_this_, prefix, ignoreCase);
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function capitalize(_this_) {
    var tmp;
    if (charSequenceLength(_this_) > 0) {
      var tmp0_substring_0 = 0;
      var tmp1_substring_0 = 1;
      var tmp2_toUpperCase_0 = _this_.substring(tmp0_substring_0, tmp1_substring_0);
      var tmp_0 = tmp2_toUpperCase_0.toUpperCase();
      var tmp3_substring_0 = 1;
      tmp = tmp_0 + _this_.substring(tmp3_substring_0);
    } else {
      {
        tmp = _this_;
      }
    }
    return tmp;
  }
  var REPLACEMENT_BYTE_SEQUENCE;
  function encodeUtf8(string, startIndex, endIndex, throwOnMalformed) {
    var tmp0_require_0 = (startIndex >= 0 ? endIndex <= string.length : false) ? startIndex <= endIndex : false;
    if (!tmp0_require_0) {
      var message_1_1 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_1));
    }var bytes = new Int8Array(imul(endIndex - startIndex | 0, 3));
    var byteIndex = 0;
    var charIndex = startIndex;
    while (charIndex < endIndex) {
      var tmp0 = charIndex;
      charIndex = tmp0 + 1 | 0;
      var tmp1__get_code__0 = charSequenceGet(string, tmp0);
      var code = tmp1__get_code__0.toInt_5();
      if (code < 128) {
        var tmp1 = byteIndex;
        byteIndex = tmp1 + 1 | 0;
        bytes[tmp1] = toByte(code);
      } else if (code < 2048) {
        var tmp2 = byteIndex;
        byteIndex = tmp2 + 1 | 0;
        bytes[tmp2] = toByte(code >> 6 | 192);
        var tmp3 = byteIndex;
        byteIndex = tmp3 + 1 | 0;
        bytes[tmp3] = toByte(code & 63 | 128);
      } else if (code < 55296 ? true : code >= 57344) {
        var tmp4 = byteIndex;
        byteIndex = tmp4 + 1 | 0;
        bytes[tmp4] = toByte(code >> 12 | 224);
        var tmp5 = byteIndex;
        byteIndex = tmp5 + 1 | 0;
        bytes[tmp5] = toByte(code >> 6 & 63 | 128);
        var tmp6 = byteIndex;
        byteIndex = tmp6 + 1 | 0;
        bytes[tmp6] = toByte(code & 63 | 128);
      } else {
        var codePoint = codePointFromSurrogate(string, code, charIndex, endIndex, throwOnMalformed);
        if (codePoint <= 0) {
          var tmp7 = byteIndex;
          byteIndex = tmp7 + 1 | 0;
          bytes[tmp7] = REPLACEMENT_BYTE_SEQUENCE[0];
          var tmp8 = byteIndex;
          byteIndex = tmp8 + 1 | 0;
          bytes[tmp8] = REPLACEMENT_BYTE_SEQUENCE[1];
          var tmp9 = byteIndex;
          byteIndex = tmp9 + 1 | 0;
          bytes[tmp9] = REPLACEMENT_BYTE_SEQUENCE[2];
        } else {
          var tmp10 = byteIndex;
          byteIndex = tmp10 + 1 | 0;
          bytes[tmp10] = toByte(codePoint >> 18 | 240);
          var tmp11 = byteIndex;
          byteIndex = tmp11 + 1 | 0;
          bytes[tmp11] = toByte(codePoint >> 12 & 63 | 128);
          var tmp12 = byteIndex;
          byteIndex = tmp12 + 1 | 0;
          bytes[tmp12] = toByte(codePoint >> 6 & 63 | 128);
          var tmp13 = byteIndex;
          byteIndex = tmp13 + 1 | 0;
          bytes[tmp13] = toByte(codePoint & 63 | 128);
          var tmp14 = charIndex;
          charIndex = tmp14 + 1 | 0;
          Unit_getInstance();
        }
      }
    }
    return bytes.length === byteIndex ? bytes : copyOf_5(bytes, byteIndex);
  }
  function codePointFromSurrogate(string, high, index, endIndex, throwOnMalformed) {
    if (!(55296 <= high ? high <= 56319 : false) ? true : index >= endIndex) {
      return malformed(0, index, throwOnMalformed);
    }var tmp0__get_code__0 = charSequenceGet(string, index);
    var low = tmp0__get_code__0.toInt_5();
    if (!(56320 <= low ? low <= 57343 : false)) {
      return malformed(0, index, throwOnMalformed);
    }return 65536 + ((high & 1023) << 10) | 0 | low & 1023;
  }
  function malformed(size, index, throwOnMalformed) {
    if (throwOnMalformed)
      throw new CharacterCodingException('' + 'Malformed sequence starting at ' + (index - 1 | 0));
    return -size | 0;
  }
  function REPLACEMENT_BYTE_SEQUENCE$init$() {
    var tmp0_byteArrayOf_0 = new Int8Array([-17, -65, -67]);
    return tmp0_byteArrayOf_0;
  }
  function printStackTrace(_this_) {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.error.apply($externalVarargReceiverTmp, [].concat([stackTraceToString(_this_)]));
    }.call(this));
  }
  function stackTraceToString(_this_) {
    return (new ExceptionTraceBuilder()).buildFor(_this_);
  }
  function hasSeen($this, exception) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_any_0 = $this._visited;
      var indexedObject = tmp0_any_0;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (element_2 === exception) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  }
  function dumpFullTrace(_this_, $this, indent, qualifier) {
    if (dumpSelfTrace(_this_, $this, indent, qualifier))
      true;
    else
      return Unit_getInstance();
    Unit_getInstance();
    var cause = _this_.cause;
    while (!(cause == null)) {
      if (dumpSelfTrace(cause, $this, indent, 'Caused by: '))
        true;
      else
        return Unit_getInstance();
      Unit_getInstance();
      cause = cause.cause;
    }
  }
  function dumpSelfTrace(_this_, $this, indent, qualifier) {
    $this._target.append_5(indent).append_5(qualifier);
    Unit_getInstance();
    var shortInfo = _this_.toString();
    if (hasSeen($this, _this_)) {
      $this._target.append_5('[CIRCULAR REFERENCE, SEE ABOVE: ').append_5(shortInfo).append_5(']\n');
      Unit_getInstance();
      return false;
    }var tmp0_asDynamic_0 = $this._visited;
    tmp0_asDynamic_0.push(_this_);
    var tmp = _this_.stack;
    var stack = (tmp == null ? true : typeof tmp === 'string') ? tmp : THROW_CCE();
    if (!(stack == null)) {
      var tmp_0 = stack;
      var tmp1_let_0 = indexOf$default_1(tmp_0, shortInfo, 0, false, 6, null);
      var stackStart = tmp1_let_0 < 0 ? 0 : tmp1_let_0 + shortInfo.length | 0;
      if (stackStart === 0) {
        $this._target.append_5(shortInfo).append_5('\n');
        Unit_getInstance();
      }var tmp2_isEmpty_0 = $this._topStack;
      if (charSequenceLength(tmp2_isEmpty_0) === 0) {
        $this._topStack = stack;
        $this._topStackStart = stackStart;
      } else {
        {
          stack = dropCommonFrames($this, stack, stackStart);
        }
      }
      if (charSequenceLength(indent) > 0) {
        var tmp_1;
        if (stackStart === 0) {
          tmp_1 = 0;
        } else {
          var count_1 = 0;
          var indexedObject = shortInfo;
          var inductionVariable = 0;
          var last_0 = indexedObject.length;
          while (inductionVariable < last_0) {
            var element_3 = charSequenceGet(indexedObject, inductionVariable);
            inductionVariable = inductionVariable + 1 | 0;
            if (element_3.equals(new Char(10))) {
              count_1 = count_1 + 1 | 0;
              Unit_getInstance();
            } else {
            }
          }
          tmp_1 = 1 + count_1 | 0;
        }
        var messageLines = tmp_1;
        var tmp3_forEachIndexed_0 = lineSequence(stack);
        var index_1 = 0;
        var tmp0_iterator_2 = tmp3_forEachIndexed_0.iterator_38();
        while (tmp0_iterator_2.hasNext_13()) {
          var item_3 = tmp0_iterator_2.next_13();
          var tmp1_4 = index_1;
          index_1 = tmp1_4 + 1 | 0;
          var tmp4__anonymous__5 = checkIndexOverflow(tmp1_4);
          if (tmp4__anonymous__5 >= messageLines) {
            $this._target.append_5(indent);
            Unit_getInstance();
          }$this._target.append_5(item_3).append_5('\n');
          Unit_getInstance();
        }
      } else {
        {
          $this._target.append_5(stack).append_5('\n');
          Unit_getInstance();
        }
      }
    } else {
      $this._target.append_5(shortInfo).append_5('\n');
      Unit_getInstance();
    }
    var suppressed = _get_suppressedExceptions_(_this_);
    if (!suppressed.isEmpty_28()) {
      var suppressedIndent = indent + '    ';
      var tmp0_iterator = suppressed.iterator_38();
      while (tmp0_iterator.hasNext_13()) {
        var s = tmp0_iterator.next_13();
        dumpFullTrace(s, $this, suppressedIndent, 'Suppressed: ');
      }
    } else {
    }
    return true;
  }
  function dropCommonFrames($this, stack, stackStart) {
    var commonFrames = 0;
    var lastBreak = 0;
    var preLastBreak = 0;
    var inductionVariable = 0;
    var tmp0_minOf_0 = $this._topStack.length - $this._topStackStart | 0;
    var tmp1_minOf_0 = stack.length - stackStart | 0;
    var last_0 = function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([tmp0_minOf_0, tmp1_minOf_0]))));
    }.call(this);
    if (inductionVariable < last_0)
      $l$break: do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = charSequenceGet(stack, _get_lastIndex__1(stack) - pos | 0);
        if (!c.equals(charSequenceGet($this._topStack, _get_lastIndex__1($this._topStack) - pos | 0)))
          break $l$break;
        if (c.equals(new Char(10))) {
          commonFrames = commonFrames + 1 | 0;
          preLastBreak = lastBreak;
          lastBreak = pos;
        }}
       while (inductionVariable < last_0);
    if (commonFrames <= 1)
      return stack;
    while (preLastBreak > 0 ? charSequenceGet(stack, _get_lastIndex__1(stack) - (preLastBreak - 1 | 0) | 0).equals(new Char(32)) : false)
      preLastBreak = preLastBreak - 1 | 0;
    return dropLast(stack, preLastBreak) + ('' + '... and ' + (commonFrames - 1 | 0) + ' more common stack frames skipped');
  }
  function ExceptionTraceBuilder() {
    this._target = StringBuilder_init_$Create$_0();
    var tmp = this;
    var tmp0_arrayOf_0 = [];
    tmp._visited = tmp0_arrayOf_0;
    this._topStack = '';
    this._topStackStart = 0;
  }
  ExceptionTraceBuilder.prototype.buildFor = function (exception) {
    dumpFullTrace(exception, this, '', '');
    return this._target.toString();
  };
  ExceptionTraceBuilder.$metadata$ = {
    simpleName: 'ExceptionTraceBuilder',
    kind: 'class',
    interfaces: []
  };
  function _get_suppressedExceptions_(_this_) {
    var tmp0_safe_receiver = _this_._suppressed;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  }
  function Companion_10() {
    Companion_instance_9 = this;
    this._MIN_VALUE_8 = new Char(0);
    this._MAX_VALUE_8 = new Char(65535);
    this._MIN_HIGH_SURROGATE = new Char(55296);
    this._MAX_HIGH_SURROGATE = new Char(56319);
    this._MIN_LOW_SURROGATE = new Char(56320);
    this._MAX_LOW_SURROGATE = new Char(57343);
    this._MIN_SURROGATE = new Char(55296);
    this._MAX_SURROGATE = new Char(57343);
    this._SIZE_BYTES_8 = 2;
    this._SIZE_BITS_8 = 16;
  }
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_10();
    return Companion_instance_9;
  }
  function Char(code) {
    Companion_getInstance_9();
    var tmp = this;
    tmp._value_0 = _UShort___get_data__impl_(code) & 65535;
  }
  Char.prototype.compareTo_9 = function (other) {
    return this._value_0 - other._value_0 | 0;
  };
  Char.prototype.compareTo_14 = function (other) {
    return this.compareTo_9(other instanceof Char ? other : THROW_CCE());
  };
  Char.prototype.minus = function (other) {
    return this._value_0 - other._value_0 | 0;
  };
  Char.prototype.toInt_5 = function () {
    return this._value_0;
  };
  Char.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char))
      return false;
    else {
    }
    return this._value_0 === other._value_0;
  };
  Char.prototype.hashCode = function () {
    return this._value_0;
  };
  Char.prototype.toString = function () {
    var tmp0_unsafeCast_0 = String.fromCharCode(this._value_0);
    return tmp0_unsafeCast_0;
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_11() {
    Companion_instance_10 = this;
  }
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_11();
    return Companion_instance_10;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_10();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype._get_ordinal__0 = function () {
    return this._ordinal;
  };
  Enum.prototype.compareTo_11 = function (other) {
    return compareTo(this._ordinal, other._ordinal);
  };
  Enum.prototype.compareTo_14 = function (other) {
    return this.compareTo_11(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function plus_0(_this_, other) {
    var tmp2_safe_receiver = _this_;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toString_1(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 'null' : tmp3_elvis_lhs;
    var tmp0_safe_receiver = other;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last_0 = array.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last_0));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__34(array);
  }
  function booleanArray(size) {
    var tmp0_withType_0 = 'BooleanArray';
    var tmp1_withType_0 = fillArrayVal(Array(size), false);
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function charArray(size) {
    var tmp1_withType_0 = 'CharArray';
    var tmp = Array(size);
    var tmp0_Char_0 = 0;
    var tmp_0;
    Companion_getInstance_9();
    var tmp0__get_code__0_1 = new Char(0);
    if (tmp0_Char_0 < tmp0__get_code__0_1.toInt_5()) {
      tmp_0 = true;
    } else {
      {
        Companion_getInstance_9();
        var tmp1__get_code__0_2 = new Char(65535);
        tmp_0 = tmp0_Char_0 > tmp1__get_code__0_2.toInt_5();
      }
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp0_Char_0);
    } else {
    }
    var tmp2_withType_0 = fillArrayVal(tmp, new Char(_UShort___init__impl_(toShort(tmp0_Char_0))));
    tmp2_withType_0.$type$ = tmp1_withType_0;
    var tmp3_unsafeCast_0 = tmp2_withType_0;
    return tmp3_unsafeCast_0;
  }
  function longArray(size) {
    var tmp0_withType_0 = 'LongArray';
    var tmp1_withType_0 = fillArrayVal(Array(size), new Long(0, 0));
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function charArrayOf(arr) {
    var tmp0_withType_0 = 'CharArray';
    var tmp1_withType_0 = arr.slice();
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function _no_name_provided__34($array) {
    this._$array = $array;
    this._index_2 = 0;
  }
  _no_name_provided__34.prototype.hasNext_13 = function () {
    return !(this._index_2 === this._$array.length);
  };
  _no_name_provided__34.prototype.next_13 = function () {
    var tmp;
    if (!(this._index_2 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_2;
      tmp0_this._index_2 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_2);
    }
    return tmp;
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0;
    return !(bufInt32[0] === 0) ? 1 : 0;
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.charCodeAt(index);
      var tmp1_Char_0 = tmp0_unsafeCast_0;
      var tmp_0;
      Companion_getInstance_9();
      var tmp0__get_code__0_1 = new Char(0);
      if (tmp1_Char_0 < tmp0__get_code__0_1.toInt_5()) {
        tmp_0 = true;
      } else {
        {
          Companion_getInstance_9();
          var tmp1__get_code__0_2 = new Char(65535);
          tmp_0 = tmp1_Char_0 > tmp1__get_code__0_2.toInt_5();
        }
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp1_Char_0);
      } else {
      }
      tmp = new Char(_UShort___init__impl_(toShort(tmp1_Char_0)));
    } else {
      tmp = a.get_28(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.length;
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a._get_length__0();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.substring(startIndex, endIndex);
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a.subSequence_1(startIndex, endIndex);
    }
    return tmp;
  }
  function contentEqualsInternal(_this_, other) {
    var a = _this_;
    var b = other;
    if (a === b)
      return true;
    if (((a == null ? true : b == null) ? true : !isArrayish(b)) ? true : a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last_0 = a.length;
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals_1(a[i], b[i])) {
          return false;
        }}
       while (inductionVariable < last_0);
    return true;
  }
  function contentHashCodeInternal(_this_) {
    var a = _this_;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last_0 = a.length;
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode(a[i]) | 0;
      }
       while (inductionVariable < last_0);
    return result;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_27(), 24, null);
  }
  function _no_name_provided__35() {
  }
  _no_name_provided__35.prototype.invoke_54 = function (it) {
    return toString_1(it);
  };
  _no_name_provided__35.prototype.invoke_95 = function (p1) {
    return this.invoke_54((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_27() {
    var i = new _no_name_provided__35();
    return function (p1) {
      return i.invoke_54(p1);
    };
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_4());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp0_asDynamic_0 = 1;
        var ia = tmp0_asDynamic_0 / a;
        var tmp_1;
        var tmp1_asDynamic_0 = 1;
        if (ia === tmp1_asDynamic_0 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_14(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
    return tmp0_unsafeCast_0;
  }
  function equals_1(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp0_asDynamic_0 = 1;
          var tmp_1 = tmp0_asDynamic_0 / obj1;
          var tmp1_asDynamic_0 = 1;
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        if (obj) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(hashCode$outlinedJsCode$(obj));
        break;
    }
    return tmp;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp0_unsafeCast_0 = o.toString();
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last_0 = length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last_0));
    return hash;
  }
  function boxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function unboxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
  }
  function hashCode$outlinedJsCode$(obj) {
    return String(obj);
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function lazy(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    var arr = dst;
    while (index < srcLen ? index < dstLen : false) {
      var tmp = index;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      arr[tmp] = src[tmp0];
    }
    return dst;
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    var tmp0_unsafeCast_0 = source.slice(0, newSize);
    var result = tmp0_unsafeCast_0;
    if (source.$type$ !== undefined) {
      result.$type$ = source.$type$;
    }var index = source.length;
    if (newSize > index) {
      result.length = newSize;
      while (index < newSize) {
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        result[tmp0] = defaultValue;
      }
    }return result;
  }
  function Companion_12() {
    Companion_instance_11 = this;
    this._MIN_VALUE_9 = new Long(0, -2147483648);
    this._MAX_VALUE_9 = new Long(-1, 2147483647);
    this._SIZE_BYTES_9 = 8;
    this._SIZE_BITS_9 = 64;
  }
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_12();
    return Companion_instance_11;
  }
  function Long(low, high) {
    Companion_getInstance_11();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_45 = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_14 = function (other) {
    return this.compareTo_45(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.plus_27 = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_28 = function (other) {
    return subtract(this, other);
  };
  Long.prototype.times_27 = function (other) {
    return multiply(this, other);
  };
  Long.prototype.div_27 = function (other) {
    return divide(this, other);
  };
  Long.prototype.rem_27 = function (other) {
    return modulo(this, other);
  };
  Long.prototype.dec_4 = function () {
    return this.minus_28(new Long(1, 0));
  };
  Long.prototype.unaryMinus_4 = function () {
    return this.inv_0().plus_27(new Long(1, 0));
  };
  Long.prototype.shl_0 = function (bitCount) {
    return shiftLeft(this, bitCount);
  };
  Long.prototype.ushr_0 = function (bitCount) {
    return shiftRightUnsigned(this, bitCount);
  };
  Long.prototype.and = function (other) {
    return new Long(this._low & other._low, this._high & other._high);
  };
  Long.prototype.xor = function (other) {
    return new Long(this._low ^ other._low, this._high ^ other._high);
  };
  Long.prototype.inv_0 = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toByte_4 = function () {
    return toByte(this._low);
  };
  Long.prototype.toShort_4 = function () {
    return toShort(this._low);
  };
  Long.prototype.toInt_5 = function () {
    return this._low;
  };
  Long.prototype.toDouble_4 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_4();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_4());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_27(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_27(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_27(negate(other));
      } else {
        tmp = negate(negate(_this_).div_27(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_27(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([1.0, Math.floor(approxDouble)]))));
      }.call(this);
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function modulo(_this_, other) {
    return subtract(_this_, multiply(_this_.div_27(other), other));
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function shiftRightUnsigned(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >>> numBits_0);
      } else {
        var tmp;
        if (numBits_0 === 32) {
          tmp = new Long(_this_._high, 0);
        } else {
          tmp = new Long(_this_._high >>> (numBits_0 - 32 | 0), 0);
        }
        return tmp;
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_27(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_5();
        var tmp = toStringImpl(div, radix);
        var tmp0_unsafeCast_0 = rem.toString(radix);
        return tmp + tmp0_unsafeCast_0;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_27(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_5();
      var tmp1_unsafeCast_0 = intval.toString(radix);
      var digits = tmp1_unsafeCast_0;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_4();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function toByte(a) {
    var tmp0_unsafeCast_0 = toByte$outlinedJsCode$(a);
    return tmp0_unsafeCast_0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_5();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp0_unsafeCast_0 = toShort$outlinedJsCode$_1(a);
    return tmp0_unsafeCast_0;
  }
  function numberToChar(a) {
    var tmp0_Char_0 = numberToInt(a) & 65535;
    var tmp;
    Companion_getInstance_9();
    var tmp0__get_code__0_1 = new Char(0);
    if (tmp0_Char_0 < tmp0__get_code__0_1.toInt_5()) {
      tmp = true;
    } else {
      {
        Companion_getInstance_9();
        var tmp1__get_code__0_2 = new Char(65535);
        tmp = tmp0_Char_0 > tmp1__get_code__0_2.toInt_5();
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp0_Char_0);
    } else {
    }
    return new Char(_UShort___init__impl_(toShort(tmp0_Char_0)));
  }
  function toLong_0(a) {
    return fromInt(a);
  }
  function toByte$outlinedJsCode$(a) {
    return a << 24 >> 24;
  }
  function toShort$outlinedJsCode$_1(a) {
    return a << 16 >> 16;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  var propertyRefClassMetadataCache;
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp0_unsafeCast_0 = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter, type));
    return tmp0_unsafeCast_0;
  }
  function getPropertyRefClass(obj, metadata) {
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    return obj;
  }
  function getKPropMetadata(paramCount, setter, type) {
    var mdata = propertyRefClassMetadataCache[paramCount][setter == null ? 0 : 1];
    if (mdata.interfaces.length == 0) {
      mdata.interfaces.push(type);
    }return mdata;
  }
  function propertyRefClassMetadataCache$init$() {
    var tmp = {kind: 'class', interfaces: []};
    var tmp0_arrayOf_0 = [tmp, {kind: 'class', interfaces: []}];
    var tmp_0 = tmp0_arrayOf_0;
    var tmp_1 = {kind: 'class', interfaces: []};
    var tmp1_arrayOf_0 = [tmp_1, {kind: 'class', interfaces: []}];
    var tmp_2 = tmp1_arrayOf_0;
    var tmp_3 = {kind: 'class', interfaces: []};
    var tmp2_arrayOf_0 = [tmp_3, {kind: 'class', interfaces: []}];
    var tmp3_arrayOf_0 = [tmp_0, tmp_2, tmp2_arrayOf_0];
    return tmp3_arrayOf_0;
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj);
    return tmp0_unsafeCast_0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable < last_0) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function jsIsType(obj, jsClass_0) {
    if (jsClass_0 === Object) {
      return isObject(obj);
    }if ((obj == null ? true : jsClass_0 == null) ? true : !(typeof obj === 'object') ? !(typeof obj === 'function') : false) {
      return false;
    }if (typeof jsClass_0 === 'function' ? jsInstanceOf(obj, jsClass_0) : false) {
      return true;
    }var proto = jsGetPrototypeOf(jsClass_0);
    var tmp0_safe_receiver = proto;
    var constructor = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.constructor;
    if (constructor != null ? jsIn('$metadata$', constructor) : false) {
      var metadata = constructor.$metadata$;
      if (metadata.kind === 'object') {
        return obj === jsClass_0;
      }}var klassMetadata = jsClass_0.$metadata$;
    if (klassMetadata == null) {
      return jsInstanceOf(obj, jsClass_0);
    }if (klassMetadata.kind === 'interface' ? obj.constructor != null : false) {
      return isInterfaceImpl(obj.constructor, jsClass_0);
    }return false;
  }
  function jsGetPrototypeOf(jsClass_0) {
    return Object.getPrototypeOf(jsClass_0);
  }
  function copyOf(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp1_withType_0 = 'CharArray';
    var tmp2_withType_0 = fillFrom(_this_, charArray(newSize));
    tmp2_withType_0.$type$ = tmp1_withType_0;
    return tmp2_withType_0;
  }
  function copyOf_0(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return fillFrom(_this_, new Float64Array(newSize));
  }
  function copyOf_1(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return fillFrom(_this_, new Float32Array(newSize));
  }
  function copyOf_2(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp1_withType_0 = 'LongArray';
    var tmp2_withType_0 = arrayCopyResize(_this_, newSize, new Long(0, 0));
    tmp2_withType_0.$type$ = tmp1_withType_0;
    return tmp2_withType_0;
  }
  function copyOf_3(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return fillFrom(_this_, new Int32Array(newSize));
  }
  function copyOf_4(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return fillFrom(_this_, new Int16Array(newSize));
  }
  function copyOf_5(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return fillFrom(_this_, new Int8Array(newSize));
  }
  function copyOf_6(_this_, newSize) {
    var tmp0_require_0 = newSize >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp1_withType_0 = 'BooleanArray';
    var tmp2_withType_0 = arrayCopyResize(_this_, newSize, false);
    tmp2_withType_0.$type$ = tmp1_withType_0;
    return tmp2_withType_0;
  }
  function contentEquals(_this_, other) {
    return contentEqualsInternal(_this_, other);
  }
  function contentHashCode(_this_) {
    return contentHashCodeInternal(_this_);
  }
  function asList(_this_) {
    return new ArrayList(_this_);
  }
  function contentToString(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = joinToString$default(tmp0_safe_receiver, ', ', '[', ']', 0, null, null, 56, null);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function isWhitespaceImpl(_this_) {
    var ch = _this_.toInt_5();
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$() {
    var tmp = IllegalArgumentException_init_$Init$(Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message) {
    var tmp = RuntimeException_init_$Init$_0(message, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, Object.create(ArithmeticException.prototype));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  ArithmeticException.$metadata$ = {
    simpleName: 'ArithmeticException',
    kind: 'class',
    interfaces: []
  };
  function NumberFormatException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    NumberFormatException.call($this);
    return $this;
  }
  function NumberFormatException_init_$Create$(message) {
    var tmp = NumberFormatException_init_$Init$(message, Object.create(NumberFormatException.prototype));
    captureStack(tmp, NumberFormatException_init_$Create$);
    return tmp;
  }
  function NumberFormatException() {
    captureStack(this, NumberFormatException);
  }
  NumberFormatException.$metadata$ = {
    simpleName: 'NumberFormatException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$_0(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$_1(obj_hack, property_hack);
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$_2(value_hack);
    return tmp0_unsafeCast_0;
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$_3(obj_hack, jsClass_hack);
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$_4(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$_0(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsDeleteProperty$outlinedJsCode$_1(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsTypeOf$outlinedJsCode$_2(value_hack) {
    return typeof value_hack;
  }
  function jsInstanceOf$outlinedJsCode$_3(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$_4(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function findAssociatedObject(_this_, annotationClass) {
    var tmp;
    var tmp_0;
    if (_this_ instanceof KClassImpl) {
      tmp_0 = annotationClass instanceof KClassImpl;
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      var tmp0_asDynamic_0 = annotationClass._get_jClass__2();
      var tmp0_safe_receiver = tmp0_asDynamic_0.$metadata$;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.associatedObjectKey;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        tmp_1 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var key = tmp_2;
      var tmp1_asDynamic_0 = _this_._get_jClass__2();
      var tmp3_safe_receiver = tmp1_asDynamic_0.$metadata$;
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.associatedObjects;
      var tmp_3;
      if (tmp4_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp4_elvis_lhs;
      }
      var map_0 = tmp_3;
      var tmp5_elvis_lhs = map_0[key];
      var tmp_4;
      if (tmp5_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp5_elvis_lhs;
      }
      var factory = tmp_4;
      return factory();
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function toString_2(_this_, radix) {
    return toStringImpl(_this_, checkRadix(radix));
  }
  function KSerializer() {
  }
  KSerializer.$metadata$ = {
    simpleName: 'KSerializer',
    kind: 'interface',
    interfaces: [SerializationStrategy, DeserializationStrategy]
  };
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = {
    simpleName: 'DeserializationStrategy',
    kind: 'interface',
    interfaces: []
  };
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = {
    simpleName: 'SerializationStrategy',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided__36(this$0) {
    this._this$0_7 = this$0;
  }
  _no_name_provided__36.prototype.invoke_90 = function ($this$buildSerialDescriptor) {
    var tmp = serializer_1(StringCompanionObject_getInstance())._get_descriptor__57();
    $this$buildSerialDescriptor.element$default('type', tmp, null, false, 12, null);
    var tmp_0 = '' + 'kotlinx.serialization.Polymorphic<' + this._this$0_7._baseClass._get_simpleName__4() + '>';
    var tmp_1 = CONTEXTUAL_getInstance();
    var tmp_2 = [];
    var tmp_3 = buildSerialDescriptor$default(tmp_0, tmp_1, tmp_2, null, 12, null);
    $this$buildSerialDescriptor.element$default('value', tmp_3, null, false, 12, null);
  };
  _no_name_provided__36.prototype.invoke_95 = function (p1) {
    this.invoke_90(p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this._baseClass = baseClass;
    var tmp = this;
    var tmp_0 = OPEN_getInstance();
    var tmp_1 = [];
    tmp._descriptor = withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp_0, tmp_1, _no_name_provided_$factory_28(this), 4, null), this._baseClass);
  }
  PolymorphicSerializer.prototype._get_baseClass__0 = function () {
    return this._baseClass;
  };
  PolymorphicSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return '' + 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this._baseClass + ')';
  };
  PolymorphicSerializer.$metadata$ = {
    simpleName: 'PolymorphicSerializer',
    kind: 'class',
    interfaces: []
  };
  function findPolymorphicSerializer(_this_, encoder, value) {
    var tmp0_elvis_lhs = _this_.findPolymorphicSerializerOrNull_2(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression_0(value), _this_._get_baseClass__0());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this_, decoder, klassName) {
    var tmp0_elvis_lhs = _this_.findPolymorphicSerializerOrNull_1(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this_._get_baseClass__0());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _no_name_provided_$factory_28(this$0) {
    var i = new _no_name_provided__36(this$0);
    return function (p1) {
      i.invoke_90(p1);
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer() {
  }
  SealedClassSerializer.$metadata$ = {
    simpleName: 'SealedClassSerializer',
    kind: 'class',
    interfaces: []
  };
  function StringFormat() {
  }
  StringFormat.$metadata$ = {
    simpleName: 'StringFormat',
    kind: 'interface',
    interfaces: [SerialFormat]
  };
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = {
    simpleName: 'SerialFormat',
    kind: 'interface',
    interfaces: []
  };
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, '' + 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = {
    simpleName: 'UnknownFieldException',
    kind: 'class',
    interfaces: []
  };
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = {
    simpleName: 'SerializationException',
    kind: 'class',
    interfaces: []
  };
  function MissingFieldException_init_$Init$(fieldName, $this) {
    MissingFieldException.call($this, '' + "Field '" + fieldName + "' is required, but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(fieldName) {
    var tmp = MissingFieldException_init_$Init$(fieldName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = {
    simpleName: 'MissingFieldException',
    kind: 'class',
    interfaces: []
  };
  function serializer(_this_, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this_, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this_, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type._get_isMarkedNullable__0();
    var tmp0_map_0 = type._get_arguments__0();
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_38();
    while (tmp0_iterator_1_2.hasNext_13()) {
      var item_2_3 = tmp0_iterator_1_2.next_13();
      var tmp$ret$0;
      l$ret$1: do {
        var tmp0_requireNotNull_0_5 = item_2_3._type;
        if (tmp0_requireNotNull_0_5 == null) {
          var message_1_6 = '' + 'Star projections in type arguments are not allowed, but had ' + type;
          throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_6));
        } else {
          tmp$ret$0 = tmp0_requireNotNull_0_5;
          break l$ret$1;
        }
      }
       while (false);
      tmp0_mapTo_0_1.add_16(tmp$ret$0);
      Unit_getInstance();
    }
    var typeArguments = tmp0_mapTo_0_1;
    var tmp;
    if (typeArguments.isEmpty_28()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this_.getContextual$default(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this_, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      tmp_1 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull(_this_) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this_);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this_) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this_, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_1_2 = typeArguments.iterator_38();
      while (tmp0_iterator_1_2.hasNext_13()) {
        var item_2_3 = tmp0_iterator_1_2.next_13();
        tmp0_mapTo_0_1.add_16(serializer(_this_, item_2_3));
        Unit_getInstance();
      }
      tmp = tmp0_mapTo_0_1;
    } else {
      var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_1_2_0 = typeArguments.iterator_38();
      while (tmp0_iterator_1_2_0.hasNext_13()) {
        var item_2_3_0 = tmp0_iterator_1_2_0.next_13();
        var tmp0_elvis_lhs_5 = serializerOrNull_0(_this_, item_2_3_0);
        var tmp_0;
        if (tmp0_elvis_lhs_5 == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs_5;
        }
        tmp0_mapTo_0_1_0.add_16(tmp_0);
        Unit_getInstance();
      }
      tmp = tmp0_mapTo_0_1_0;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass_0(Collection)) ? true : tmp0_subject.equals(getKClass_0(List))) ? true : tmp0_subject.equals(getKClass_0(MutableList))) ? true : tmp0_subject.equals(getKClass_0(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.get_28(0));
    } else if (tmp0_subject.equals(getKClass_0(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.get_28(0));
    } else if ((tmp0_subject.equals(getKClass_0(Set)) ? true : tmp0_subject.equals(getKClass_0(MutableSet))) ? true : tmp0_subject.equals(getKClass_0(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.get_28(0));
    } else if (tmp0_subject.equals(getKClass_0(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.get_28(0), serializers.get_28(1));
    } else if ((tmp0_subject.equals(getKClass_0(Map_0)) ? true : tmp0_subject.equals(getKClass_0(MutableMap))) ? true : tmp0_subject.equals(getKClass_0(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.get_28(0), serializers.get_28(1));
    } else if (tmp0_subject.equals(getKClass_0(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.get_28(0), serializers.get_28(1));
    } else if (tmp0_subject.equals(getKClass_0(Pair))) {
      tmp_1 = PairSerializer(serializers.get_28(0), serializers.get_28(1));
    } else if (tmp0_subject.equals(getKClass_0(Triple))) {
      tmp_1 = TripleSerializer(serializers.get_28(0), serializers.get_28(1), serializers.get_28(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp_2 = typeArguments.get_28(0)._get_classifier__0();
        var tmp0_cast_0 = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.get_28(0));
        return isInterface(tmp0_cast_0, KSerializer) ? tmp0_cast_0 : THROW_CCE();
      }var args = copyToArray_0(serializers);
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this_, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this_, shouldBeNullable) {
    if (shouldBeNullable)
      return _get_nullable_(_this_);
    return isInterface(_this_, KSerializer) ? _this_ : THROW_CCE();
  }
  function serializerOrNull_0(_this_, type) {
    return serializerByKTypeImpl(_this_, type, false);
  }
  function reflectiveOrContextual(_this_, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull(kClass);
    return tmp0_elvis_lhs == null ? _this_.getContextual_0(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_0(type) {
    return serializer(EmptySerializersModule, type);
  }
  function serializer_1(_this_) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this_) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this_) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this_) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this_) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this_) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this_) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this_) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_9(_this_) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_10(_this_) {
    return UnitSerializer_getInstance();
  }
  function serializer_11(_this_) {
    return UIntSerializer_getInstance();
  }
  function serializer_12(_this_) {
    return ULongSerializer_getInstance();
  }
  function serializer_13(_this_) {
    return UByteSerializer_getInstance();
  }
  function serializer_14(_this_) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function _get_nullable_(_this_) {
    var tmp;
    if (_this_._get_descriptor__57()._get_isNullable__17()) {
      tmp = isInterface(_this_, KSerializer) ? _this_ : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this_);
    }
    return tmp;
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function withContext(_this_, context) {
    return new ContextDescriptor(_this_, context);
  }
  function ContextDescriptor(original, kClass) {
    this._original = original;
    this._kClass = kClass;
    this._serialName = '' + this._original._get_serialName__17() + '<' + this._kClass._get_simpleName__4() + '>';
  }
  ContextDescriptor.prototype.getElementAnnotations_17 = function (index) {
    return this._original.getElementAnnotations_17(index);
  };
  ContextDescriptor.prototype.getElementDescriptor_17 = function (index) {
    return this._original.getElementDescriptor_17(index);
  };
  ContextDescriptor.prototype.getElementIndex_17 = function (name) {
    return this._original.getElementIndex_17(name);
  };
  ContextDescriptor.prototype.getElementName_17 = function (index) {
    return this._original.getElementName_17(index);
  };
  ContextDescriptor.prototype._get_elementsCount__17 = function () {
    return this._original._get_elementsCount__17();
  };
  ContextDescriptor.prototype._get_isInline__17 = function () {
    return this._original._get_isInline__17();
  };
  ContextDescriptor.prototype._get_isNullable__17 = function () {
    return this._original._get_isNullable__17();
  };
  ContextDescriptor.prototype._get_kind__17 = function () {
    return this._original._get_kind__17();
  };
  ContextDescriptor.prototype._get_serialName__17 = function () {
    return this._serialName;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals_1(this._original, another._original) ? another._kClass.equals(this._kClass) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this._kClass.hashCode();
    result = imul(31, result) + getStringHashCode(this._serialName) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return '' + 'ContextDescriptor(kClass: ' + this._kClass + ', original: ' + this._original + ')';
  };
  ContextDescriptor.$metadata$ = {
    simpleName: 'ContextDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function SerialDescriptor() {
  }
  SerialDescriptor.prototype._get_isNullable__17 = function () {
    return false;
  };
  SerialDescriptor.prototype._get_isInline__17 = function () {
    return false;
  };
  SerialDescriptor.$metadata$ = {
    simpleName: 'SerialDescriptor',
    kind: 'interface',
    interfaces: []
  };
  function _get_elementDescriptors_(_this_) {
    return new _no_name_provided__1_0(_this_);
  }
  function _no_name_provided__37($this_elementDescriptors) {
    this._$this_elementDescriptors = $this_elementDescriptors;
    this._elementsLeft = this._$this_elementDescriptors._get_elementsCount__17();
  }
  _no_name_provided__37.prototype.hasNext_13 = function () {
    return this._elementsLeft > 0;
  };
  _no_name_provided__37.prototype.next_13 = function () {
    var tmp = this._$this_elementDescriptors._get_elementsCount__17();
    var tmp0_this = this;
    var tmp1 = tmp0_this._elementsLeft;
    tmp0_this._elementsLeft = tmp1 - 1 | 0;
    return this._$this_elementDescriptors.getElementDescriptor_17(tmp - tmp1 | 0);
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  function _no_name_provided__1_0($this_elementDescriptors) {
    this._$this_elementDescriptors_0 = $this_elementDescriptors;
  }
  _no_name_provided__1_0.prototype.iterator_2_0 = function () {
    return new _no_name_provided__37(this._$this_elementDescriptors_0);
  };
  _no_name_provided__1_0.prototype.iterator_38 = function () {
    return this.iterator_2_0();
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Iterable]
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp0_require_0 = !isBlank(serialName);
    if (!tmp0_require_0) {
      var message_1 = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp1_require_0 = !equals_1(kind, CLASS_getInstance());
    if (!tmp1_require_0) {
      var message_1_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_0));
    }var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder._elementNames._get_size__28(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = _no_name_provided_$factory_29();
    }return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this._serialName_0 = serialName;
    this._isNullable = false;
    this._annotations = emptyList();
    this._elementNames = ArrayList_init_$Create$();
    this._uniqueNames = HashSet_init_$Create$();
    this._elementDescriptors = ArrayList_init_$Create$();
    this._elementAnnotations = ArrayList_init_$Create$();
    this._elementOptionality = ArrayList_init_$Create$();
  }
  ClassSerialDescriptorBuilder.prototype.element = function (elementName, descriptor, annotations, isOptional) {
    var tmp0_require_0 = this._uniqueNames.add_16(elementName);
    if (!tmp0_require_0) {
      var message_1 = '' + "Element with name '" + elementName + "' is already registered";
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp0_this = this;
    var tmp1_plusAssign_0 = tmp0_this._elementNames;
    tmp1_plusAssign_0.add_16(elementName);
    Unit_getInstance();
    var tmp1_this = this;
    var tmp2_plusAssign_0 = tmp1_this._elementDescriptors;
    tmp2_plusAssign_0.add_16(descriptor);
    Unit_getInstance();
    var tmp2_this = this;
    var tmp3_plusAssign_0 = tmp2_this._elementAnnotations;
    tmp3_plusAssign_0.add_16(annotations);
    Unit_getInstance();
    var tmp3_this = this;
    var tmp4_plusAssign_0 = tmp3_this._elementOptionality;
    tmp4_plusAssign_0.add_16(isOptional);
    Unit_getInstance();
  };
  ClassSerialDescriptorBuilder.prototype.element$default = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.element(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = {
    simpleName: 'ClassSerialDescriptorBuilder',
    kind: 'class',
    interfaces: []
  };
  function _get__hashCode_($this) {
    var tmp0_getValue_0 = $this.__hashCode$delegate;
    var tmp1_getValue_0 = _hashCode$factory();
    return tmp0_getValue_0._get_value__14();
  }
  function _no_name_provided__38(this$0) {
    this._this$0_8 = this$0;
  }
  _no_name_provided__38.prototype.invoke_93 = function () {
    return hashCodeImpl(this._this$0_8, this._this$0_8._typeParametersDescriptors);
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__39(this$0) {
    this._this$0_9 = this$0;
  }
  _no_name_provided__39.prototype.invoke_70 = function (it) {
    return this._this$0_9.getElementName_17(it) + ': ' + this._this$0_9.getElementDescriptor_17(it)._get_serialName__17();
  };
  _no_name_provided__39.prototype.invoke_95 = function (p1) {
    return this.invoke_70((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this._serialName_1 = serialName;
    this._kind = kind;
    this._elementsCount = elementsCount;
    this._annotations_0 = builder._annotations;
    this._serialNames = toHashSet(builder._elementNames);
    var tmp = this;
    var tmp0_toTypedArray_0 = builder._elementNames;
    tmp._elementNames_0 = copyToArray_0(tmp0_toTypedArray_0);
    this._elementDescriptors_0 = compactArray(builder._elementDescriptors);
    var tmp_0 = this;
    var tmp0_toTypedArray_0_0 = builder._elementAnnotations;
    tmp_0._elementAnnotations_0 = copyToArray_0(tmp0_toTypedArray_0_0);
    this._elementOptionality_0 = toBooleanArray(builder._elementOptionality);
    var tmp_1 = this;
    var tmp0_map_0 = withIndex(this._elementNames_0);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_38();
    while (tmp0_iterator_1_2.hasNext_13()) {
      var item_2_3 = tmp0_iterator_1_2.next_13();
      tmp0_mapTo_0_1.add_16(to(item_2_3._value, item_2_3._index));
      Unit_getInstance();
    }
    tmp_1._name2Index = toMap(tmp0_mapTo_0_1);
    this._typeParametersDescriptors = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.__hashCode$delegate = lazy(_no_name_provided_$factory_30(this));
  }
  SerialDescriptorImpl.prototype._get_serialName__17 = function () {
    return this._serialName_1;
  };
  SerialDescriptorImpl.prototype._get_kind__17 = function () {
    return this._kind;
  };
  SerialDescriptorImpl.prototype._get_elementsCount__17 = function () {
    return this._elementsCount;
  };
  SerialDescriptorImpl.prototype._get_serialNames__3 = function () {
    return this._serialNames;
  };
  SerialDescriptorImpl.prototype.getElementName_17 = function (index) {
    return getChecked(this._elementNames_0, index);
  };
  SerialDescriptorImpl.prototype.getElementIndex_17 = function (name) {
    var tmp0_elvis_lhs = this._name2Index.get_16(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_12();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.getElementAnnotations_17 = function (index) {
    return getChecked(this._elementAnnotations_0, index);
  };
  SerialDescriptorImpl.prototype.getElementDescriptor_17 = function (index) {
    return getChecked(this._elementDescriptors_0, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    l$ret$1: do {
      if (this === other) {
        tmp$ret$0 = true;
        break l$ret$1;
      }if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      if (!(this._get_serialName__17() === other._get_serialName__17())) {
        tmp$ret$0 = false;
        break l$ret$1;
      }var tmp0__anonymous__3 = other;
      if (!contentEquals(this._typeParametersDescriptors, tmp0__anonymous__3._typeParametersDescriptors)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      if (!(this._get_elementsCount__17() === other._get_elementsCount__17())) {
        tmp$ret$0 = false;
        break l$ret$1;
      }var inductionVariable = 0;
      var last_0 = this._get_elementsCount__17();
      if (inductionVariable < last_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_17(index_2)._get_serialName__17() === other.getElementDescriptor_17(index_2)._get_serialName__17())) {
            tmp$ret$0 = false;
            break l$ret$1;
          }if (!equals_1(this.getElementDescriptor_17(index_2)._get_kind__17(), other.getElementDescriptor_17(index_2)._get_kind__17())) {
            tmp$ret$0 = false;
            break l$ret$1;
          }}
         while (inductionVariable < last_0);
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode_(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this._elementsCount);
    var tmp_0 = '' + this._serialName_1 + '(';
    return joinToString$default_0(tmp, ', ', tmp_0, ')', 0, null, _no_name_provided_$factory_31(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = {
    simpleName: 'SerialDescriptorImpl',
    kind: 'class',
    interfaces: [SerialDescriptor, CachedNames]
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp0_require_0 = !isBlank(serialName);
    if (!tmp0_require_0) {
      var message_1 = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder._elementNames._get_size__28(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = _no_name_provided_$factory_32();
    }return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    var tmp0_require_0 = !isBlank(serialName);
    if (!tmp0_require_0) {
      var message_1 = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return PrimitiveDescriptorSafe(serialName, kind);
  }
  function _no_name_provided__40() {
  }
  _no_name_provided__40.prototype.invoke_90 = function ($this$null) {
    return Unit_getInstance();
  };
  _no_name_provided__40.prototype.invoke_95 = function (p1) {
    this.invoke_90(p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__40.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__41() {
  }
  _no_name_provided__41.prototype.invoke_90 = function ($this$null) {
    return Unit_getInstance();
  };
  _no_name_provided__41.prototype.invoke_95 = function (p1) {
    this.invoke_90(p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__41.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode_(receiver);
    }, null);
  }
  function _no_name_provided_$factory_29() {
    var i = new _no_name_provided__40();
    return function (p1) {
      i.invoke_90(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_30(this$0) {
    var i = new _no_name_provided__38(this$0);
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_31(this$0) {
    var i = new _no_name_provided__39(this$0);
    return function (p1) {
      return i.invoke_70(p1);
    };
  }
  function _no_name_provided_$factory_32() {
    var i = new _no_name_provided__41();
    return function (p1) {
      i.invoke_90(p1);
      return Unit_getInstance();
    };
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = {
    simpleName: 'ENUM',
    kind: 'object',
    interfaces: []
  };
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = {
    simpleName: 'CONTEXTUAL',
    kind: 'object',
    interfaces: []
  };
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression_0(this)._get_simpleName__4());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = {
    simpleName: 'SerialKind',
    kind: 'class',
    interfaces: []
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = {
    simpleName: 'BOOLEAN',
    kind: 'object',
    interfaces: []
  };
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = {
    simpleName: 'BYTE',
    kind: 'object',
    interfaces: []
  };
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = {
    simpleName: 'CHAR',
    kind: 'object',
    interfaces: []
  };
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = {
    simpleName: 'SHORT',
    kind: 'object',
    interfaces: []
  };
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = {
    simpleName: 'INT',
    kind: 'object',
    interfaces: []
  };
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = {
    simpleName: 'LONG',
    kind: 'object',
    interfaces: []
  };
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = {
    simpleName: 'FLOAT',
    kind: 'object',
    interfaces: []
  };
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = {
    simpleName: 'DOUBLE',
    kind: 'object',
    interfaces: []
  };
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = {
    simpleName: 'STRING',
    kind: 'object',
    interfaces: []
  };
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = {
    simpleName: 'PrimitiveKind',
    kind: 'class',
    interfaces: []
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = {
    simpleName: 'CLASS',
    kind: 'object',
    interfaces: []
  };
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = {
    simpleName: 'LIST',
    kind: 'object',
    interfaces: []
  };
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = {
    simpleName: 'MAP',
    kind: 'object',
    interfaces: []
  };
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = {
    simpleName: 'OBJECT',
    kind: 'object',
    interfaces: []
  };
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = {
    simpleName: 'StructureKind',
    kind: 'class',
    interfaces: []
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = {
    simpleName: 'SEALED',
    kind: 'object',
    interfaces: []
  };
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = {
    simpleName: 'OPEN',
    kind: 'object',
    interfaces: []
  };
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = {
    simpleName: 'PolymorphicKind',
    kind: 'class',
    interfaces: []
  };
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.decodeValue_1 = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression_0(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.decodeNotNullMark_8 = function () {
    return true;
  };
  AbstractDecoder.prototype.decodeNull_8 = function () {
    return null;
  };
  AbstractDecoder.prototype.decodeBoolean_8 = function () {
    var tmp = this.decodeValue_1();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeByte_8 = function () {
    var tmp = this.decodeValue_1();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeShort_8 = function () {
    var tmp = this.decodeValue_1();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeInt_8 = function () {
    var tmp = this.decodeValue_1();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeLong_8 = function () {
    var tmp = this.decodeValue_1();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeFloat_8 = function () {
    var tmp = this.decodeValue_1();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeDouble_8 = function () {
    var tmp = this.decodeValue_1();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeChar_8 = function () {
    var tmp = this.decodeValue_1();
    return tmp instanceof Char ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeString_8 = function () {
    var tmp = this.decodeValue_1();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeEnum_8 = function (enumDescriptor) {
    var tmp = this.decodeValue_1();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeInline_8 = function (inlineDescriptor) {
    return this;
  };
  AbstractDecoder.prototype.decodeSerializableValue_17 = function (deserializer, previousValue) {
    return this.decodeSerializableValue_16(deserializer);
  };
  AbstractDecoder.prototype.beginStructure_11 = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.endStructure_11 = function (descriptor) {
  };
  AbstractDecoder.prototype.decodeBooleanElement_8 = function (descriptor, index) {
    return this.decodeBoolean_8();
  };
  AbstractDecoder.prototype.decodeByteElement_8 = function (descriptor, index) {
    return this.decodeByte_8();
  };
  AbstractDecoder.prototype.decodeShortElement_8 = function (descriptor, index) {
    return this.decodeShort_8();
  };
  AbstractDecoder.prototype.decodeIntElement_8 = function (descriptor, index) {
    return this.decodeInt_8();
  };
  AbstractDecoder.prototype.decodeLongElement_8 = function (descriptor, index) {
    return this.decodeLong_8();
  };
  AbstractDecoder.prototype.decodeFloatElement_8 = function (descriptor, index) {
    return this.decodeFloat_8();
  };
  AbstractDecoder.prototype.decodeDoubleElement_8 = function (descriptor, index) {
    return this.decodeDouble_8();
  };
  AbstractDecoder.prototype.decodeCharElement_8 = function (descriptor, index) {
    return this.decodeChar_8();
  };
  AbstractDecoder.prototype.decodeStringElement_8 = function (descriptor, index) {
    return this.decodeString_8();
  };
  AbstractDecoder.prototype.decodeSerializableElement_8 = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableValue_17(deserializer, previousValue);
  };
  AbstractDecoder.prototype.decodeNullableSerializableElement_8 = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer._get_descriptor__57()._get_isNullable__17();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_8()) ? this.decodeSerializableValue_17(deserializer, previousValue) : this.decodeNull_8();
  };
  AbstractDecoder.$metadata$ = {
    simpleName: 'AbstractDecoder',
    kind: 'class',
    interfaces: [Decoder, CompositeDecoder]
  };
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.beginStructure_11 = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.endStructure_11 = function (descriptor) {
  };
  AbstractEncoder.prototype.encodeElement_0 = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.encodeValue_0 = function (value) {
    throw SerializationException_init_$Create$('' + 'Non-serializable ' + getKClassFromExpression_0(value) + ' is not supported by ' + getKClassFromExpression_0(this) + ' encoder');
  };
  AbstractEncoder.prototype.encodeNull_1 = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.encodeBoolean_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeByte_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeShort_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeInt_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeLong_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeFloat_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeDouble_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeChar_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeString_1 = function (value) {
    return this.encodeValue_0(value);
  };
  AbstractEncoder.prototype.encodeEnum_1 = function (enumDescriptor, index) {
    return this.encodeValue_0(index);
  };
  AbstractEncoder.prototype.encodeInline_1 = function (inlineDescriptor) {
    return this;
  };
  AbstractEncoder.prototype.encodeBooleanElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeBoolean_1(value);
  };
  AbstractEncoder.prototype.encodeByteElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeByte_1(value);
  };
  AbstractEncoder.prototype.encodeShortElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeShort_1(value);
  };
  AbstractEncoder.prototype.encodeIntElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeInt_1(value);
  };
  AbstractEncoder.prototype.encodeLongElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeLong_1(value);
  };
  AbstractEncoder.prototype.encodeFloatElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeFloat_1(value);
  };
  AbstractEncoder.prototype.encodeDoubleElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeDouble_1(value);
  };
  AbstractEncoder.prototype.encodeCharElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeChar_1(value);
  };
  AbstractEncoder.prototype.encodeStringElement_1 = function (descriptor, index, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeString_1(value);
  };
  AbstractEncoder.prototype.encodeSerializableElement_1 = function (descriptor, index, serializer_15, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeSerializableValue_1(serializer_15, value);
  };
  AbstractEncoder.prototype.encodeNullableSerializableElement_1 = function (descriptor, index, serializer_15, value) {
    if (this.encodeElement_0(descriptor, index))
      this.encodeNullableSerializableValue_1(serializer_15, value);
  };
  AbstractEncoder.$metadata$ = {
    simpleName: 'AbstractEncoder',
    kind: 'class',
    interfaces: [Encoder, CompositeEncoder]
  };
  function Decoder() {
  }
  Decoder.prototype.decodeSerializableValue_16 = function (deserializer) {
    return deserializer.deserialize_61(this);
  };
  Decoder.$metadata$ = {
    simpleName: 'Decoder',
    kind: 'interface',
    interfaces: []
  };
  function Companion_13() {
    Companion_instance_12 = this;
    this._DECODE_DONE = -1;
    this._UNKNOWN_NAME = -3;
  }
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_13();
    return Companion_instance_12;
  }
  function CompositeDecoder() {
  }
  CompositeDecoder.prototype.decodeSequentially_8 = function () {
    return false;
  };
  CompositeDecoder.prototype.decodeCollectionSize_8 = function (descriptor) {
    return -1;
  };
  CompositeDecoder.prototype.decodeSerializableElement$default_8 = function (descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeSerializableElement_8(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  };
  CompositeDecoder.$metadata$ = {
    simpleName: 'CompositeDecoder',
    kind: 'interface',
    interfaces: []
  };
  function Encoder() {
  }
  Encoder.prototype.encodeNotNullMark_1 = function () {
  };
  Encoder.prototype.beginCollection_1 = function (descriptor, collectionSize) {
    return this.beginStructure_11(descriptor);
  };
  Encoder.prototype.encodeSerializableValue_1 = function (serializer_15, value) {
    serializer_15.serialize_91(this, value);
  };
  Encoder.prototype.encodeNullableSerializableValue_1 = function (serializer_15, value) {
    var isNullabilitySupported = serializer_15._get_descriptor__57()._get_isNullable__17();
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_1(isInterface(serializer_15, SerializationStrategy) ? serializer_15 : THROW_CCE(), value);
    }if (value == null) {
      this.encodeNull_1();
    } else {
      this.encodeNotNullMark_1();
      this.encodeSerializableValue_1(serializer_15, value);
    }
  };
  Encoder.$metadata$ = {
    simpleName: 'Encoder',
    kind: 'interface',
    interfaces: []
  };
  function CompositeEncoder() {
  }
  CompositeEncoder.prototype.shouldEncodeElementDefault_1 = function (descriptor, index) {
    return true;
  };
  CompositeEncoder.$metadata$ = {
    simpleName: 'CompositeEncoder',
    kind: 'interface',
    interfaces: []
  };
  function decodeSequentially($this, compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_8($this._get_descriptor__57(), 0);
    var serializer_15 = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this._get_descriptor__57();
    return compositeDecoder.decodeSerializableElement$default_8(tmp, 1, serializer_15, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.serialize_91 = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    var tmp0_encodeStructure_0 = this._get_descriptor__57();
    var composite_1 = encoder.beginStructure_11(tmp0_encodeStructure_0);
    var ex_2 = null;
    try {
      composite_1.encodeStringElement_1(this._get_descriptor__57(), 0, actualSerializer._get_descriptor__57()._get_serialName__17());
      var tmp = this._get_descriptor__57();
      composite_1.encodeSerializableElement_1(tmp, 1, isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE(), value);
    } catch ($p) {
      if ($p instanceof Error) {
        ex_2 = $p;
        throw $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      if (ex_2 == null)
        composite_1.endStructure_11(tmp0_encodeStructure_0);
    }
  };
  AbstractPolymorphicSerializer.prototype.deserialize_61 = function (decoder) {
    var tmp$ret$4;
    l$ret$5: do {
      var tmp0_decodeStructure_0 = this._get_descriptor__57();
      var composite_1 = decoder.beginStructure_11(tmp0_decodeStructure_0);
      var ex_2 = null;
      try {
        var klassName_5 = null;
        var value_6 = null;
        if (composite_1.decodeSequentially_8()) {
          return decodeSequentially(this, composite_1);
        }mainLoop: while (true) {
          var index_7 = composite_1.decodeElementIndex_8(this._get_descriptor__57());
          Companion_getInstance_12();
          if (index_7 === -1) {
            break mainLoop;
          } else {
            if (index_7 === 0) {
              klassName_5 = composite_1.decodeStringElement_8(this._get_descriptor__57(), index_7);
            } else {
              if (index_7 === 1) {
                var tmp$ret$0;
                l$ret$1: do {
                  var tmp0_requireNotNull_0_8 = klassName_5;
                  if (tmp0_requireNotNull_0_8 == null) {
                    var message_1_9 = 'Cannot read polymorphic value before its type token';
                    throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_9));
                  } else {
                    tmp$ret$0 = tmp0_requireNotNull_0_8;
                    break l$ret$1;
                  }
                }
                 while (false);
                klassName_5 = tmp$ret$0;
                var serializer_10_0 = findPolymorphicSerializer_0(this, composite_1, klassName_5);
                var tmp = this._get_descriptor__57();
                value_6 = composite_1.decodeSerializableElement$default_8(tmp, index_7, serializer_10_0, null, 8, null);
              } else {
                {
                  var tmp0_elvis_lhs_11 = klassName_5;
                  throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs_11 == null ? 'unknown class' : tmp0_elvis_lhs_11) + ('' + '\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index_7));
                }
              }
            }
          }
        }
        var tmp$ret$2;
        l$ret$3: do {
          var tmp1_requireNotNull_0_12 = value_6;
          if (tmp1_requireNotNull_0_12 == null) {
            var message_1_13 = '' + 'Polymorphic value has not been read for class ' + klassName_5;
            throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_13));
          } else {
            tmp$ret$2 = tmp1_requireNotNull_0_12;
            break l$ret$3;
          }
        }
         while (false);
        var tmp_0 = tmp$ret$2;
        tmp$ret$4 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
        break l$ret$5;
      } catch ($p) {
        if ($p instanceof Error) {
          ex_2 = $p;
          throw $p;
        } else {
          {
            throw $p;
          }
        }
      }
      finally {
        if (ex_2 == null)
          composite_1.endStructure_11(tmp0_decodeStructure_0);
      }
    }
     while (false);
    return tmp$ret$4;
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_1 = function (decoder, klassName) {
    return decoder._get_serializersModule__15().getPolymorphic_2(this._get_baseClass__0(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_2 = function (encoder, value) {
    return encoder._get_serializersModule__15().getPolymorphic_1(this._get_baseClass__0(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = {
    simpleName: 'AbstractPolymorphicSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass._get_simpleName__4();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = '' + "in the scope of '" + baseClass._get_simpleName__4() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? '' + 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : '' + "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = {
    simpleName: 'CachedNames',
    kind: 'interface',
    interfaces: []
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this._serialName_2 = '' + primitive._get_serialName__17() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype._get_serialName__17 = function () {
    return this._serialName_2;
  };
  PrimitiveArrayDescriptor.$metadata$ = {
    simpleName: 'PrimitiveArrayDescriptor',
    kind: 'class',
    interfaces: []
  };
  function ListLikeDescriptor(elementDescriptor) {
    this._elementDescriptor = elementDescriptor;
    this._elementsCount_0 = 1;
  }
  ListLikeDescriptor.prototype._get_kind__17 = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype._get_elementsCount__17 = function () {
    return this._elementsCount_0;
  };
  ListLikeDescriptor.prototype.getElementName_17 = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_17 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$_0('' + name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.getElementAnnotations_17 = function (index) {
    var tmp0_require_0 = index >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Illegal index ' + index + ', ' + this._get_serialName__17() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return emptyList();
  };
  ListLikeDescriptor.prototype.getElementDescriptor_17 = function (index) {
    var tmp0_require_0 = index >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Illegal index ' + index + ', ' + this._get_serialName__17() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return this._elementDescriptor;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    else {
    }
    if (equals_1(this._elementDescriptor, other._elementDescriptor) ? this._get_serialName__17() === other._get_serialName__17() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this._elementDescriptor), 31) + getStringHashCode(this._get_serialName__17()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return '' + this._get_serialName__17() + '(' + this._elementDescriptor + ')';
  };
  ListLikeDescriptor.$metadata$ = {
    simpleName: 'ListLikeDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype._get_serialName__17 = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = {
    simpleName: 'LinkedHashSetClassDesc',
    kind: 'class',
    interfaces: []
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype._get_serialName__17 = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = {
    simpleName: 'ArrayListClassDesc',
    kind: 'class',
    interfaces: []
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype._get_serialName__17 = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = {
    simpleName: 'HashSetClassDesc',
    kind: 'class',
    interfaces: []
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = {
    simpleName: 'HashMapClassDesc',
    kind: 'class',
    interfaces: []
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = {
    simpleName: 'LinkedHashMapClassDesc',
    kind: 'class',
    interfaces: []
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype._get_serialName__17 = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = {
    simpleName: 'ArrayClassDesc',
    kind: 'class',
    interfaces: []
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this._serialName_3 = serialName;
    this._keyDescriptor = keyDescriptor;
    this._valueDescriptor = valueDescriptor;
    this._elementsCount_1 = 2;
  }
  MapLikeDescriptor.prototype._get_serialName__17 = function () {
    return this._serialName_3;
  };
  MapLikeDescriptor.prototype._get_kind__17 = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype._get_elementsCount__17 = function () {
    return this._elementsCount_1;
  };
  MapLikeDescriptor.prototype.getElementName_17 = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_17 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$_0('' + name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.getElementAnnotations_17 = function (index) {
    var tmp0_require_0 = index >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Illegal index ' + index + ', ' + this._get_serialName__17() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }return emptyList();
  };
  MapLikeDescriptor.prototype.getElementDescriptor_17 = function (index) {
    var tmp0_require_0 = index >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Illegal index ' + index + ', ' + this._get_serialName__17() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp0_subject = index % 2;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this._keyDescriptor;
        break;
      case 1:
        tmp = this._valueDescriptor;
        break;
      default:var tmp1_error_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    else {
    }
    if (!(this._get_serialName__17() === other._get_serialName__17()))
      return false;
    if (!equals_1(this._keyDescriptor, other._keyDescriptor))
      return false;
    if (!equals_1(this._valueDescriptor, other._valueDescriptor))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this._get_serialName__17());
    result = imul(31, result) + hashCode(this._keyDescriptor) | 0;
    result = imul(31, result) + hashCode(this._valueDescriptor) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return '' + this._get_serialName__17() + '(' + this._keyDescriptor + ', ' + this._valueDescriptor + ')';
  };
  MapLikeDescriptor.$metadata$ = {
    simpleName: 'MapLikeDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    ListLikeSerializer.call(this, primitiveSerializer);
    this._descriptor_0 = new PrimitiveArrayDescriptor(primitiveSerializer._get_descriptor__57());
  }
  PrimitiveArraySerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_0;
  };
  PrimitiveArraySerializer.prototype.builderSize_14 = function (_this__0) {
    return _this__0._get_position__7();
  };
  PrimitiveArraySerializer.prototype.toResult_14 = function (_this__0) {
    return _this__0.build_8();
  };
  PrimitiveArraySerializer.prototype.checkCapacity_14 = function (_this__0, size) {
    return _this__0.ensureCapacity_8(size);
  };
  PrimitiveArraySerializer.prototype.collectionIterator = function (_this__0) {
    var tmp0_error_0 = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  PrimitiveArraySerializer.prototype.collectionIterator_14 = function (_this__0) {
    return this.collectionIterator((_this__0 == null ? true : isObject(_this__0)) ? _this__0 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.insert_8 = function (_this__0, index, element) {
    var tmp0_error_0 = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  PrimitiveArraySerializer.prototype.builder_16 = function () {
    return this.toBuilder_30(this.empty_7());
  };
  PrimitiveArraySerializer.prototype.serialize_3 = function (encoder, value) {
    var size = this.collectionSize_29(value);
    var composite = encoder.beginCollection_1(this._descriptor_0, size);
    this.writeContent_15(composite, value, size);
    composite.endStructure_11(this._descriptor_0);
  };
  PrimitiveArraySerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_3(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.serialize_15 = function (encoder, value) {
    return this.serialize_3(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.deserialize_61 = function (decoder) {
    return this.merge_8(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = {
    simpleName: 'PrimitiveArraySerializer',
    kind: 'class',
    interfaces: []
  };
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.ensureCapacity$default_7 = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this._get_position__7() + 1 | 0;
    return $handler == null ? this.ensureCapacity_8(requiredCapacity) : $handler(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = {
    simpleName: 'PrimitiveArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this._elementSerializer = elementSerializer;
  }
  ListLikeSerializer.prototype.serialize_15 = function (encoder, value) {
    var size = this.collectionSize_29(value);
    var composite = encoder.beginCollection_1(this._get_descriptor__57(), size);
    var iterator = this.collectionIterator_14(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.encodeSerializableElement_1(this._get_descriptor__57(), index, this._elementSerializer, iterator.next_13());
      }
       while (inductionVariable < size);
    composite.endStructure_11(this._get_descriptor__57());
  };
  ListLikeSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_15(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  ListLikeSerializer.prototype.readAll_8 = function (decoder, builder, startIndex, size) {
    var tmp0_require_0 = size >= 0;
    if (!tmp0_require_0) {
      var message_1 = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.readElement_24(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  ListLikeSerializer.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    var tmp = this._get_descriptor__57();
    this.insert_8(builder, index, decoder.decodeSerializableElement$default_8(tmp, index, this._elementSerializer, null, 8, null));
  };
  ListLikeSerializer.$metadata$ = {
    simpleName: 'ListLikeSerializer',
    kind: 'class',
    interfaces: []
  };
  function readSize($this, decoder, builder) {
    var size = decoder.decodeCollectionSize_8($this._get_descriptor__57());
    $this.checkCapacity_14(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.merge_8 = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toBuilder_30(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.builder_16() : tmp1_elvis_lhs;
    var startIndex = this.builderSize_14(builder);
    var compositeDecoder = decoder.beginStructure_11(this._get_descriptor__57());
    if (compositeDecoder.decodeSequentially_8()) {
      this.readAll_8(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$break: while (true) {
        var index = compositeDecoder.decodeElementIndex_8(this._get_descriptor__57());
        Companion_getInstance_12();
        if (index === -1)
          break $l$break;
        else {
        }
        var tmp = startIndex + index | 0;
        this.readElement$default_8(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.endStructure_11(this._get_descriptor__57());
    return this.toResult_14(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_61 = function (decoder) {
    return this.merge_8(decoder, null);
  };
  AbstractCollectionSerializer.prototype.readElement$default_8 = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    return $handler == null ? this.readElement_24(decoder, index, builder, checkIndex) : $handler(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = {
    simpleName: 'AbstractCollectionSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function LinkedHashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this._descriptor_1 = new LinkedHashSetClassDesc(eSerializer._get_descriptor__57());
  }
  LinkedHashSetSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_1;
  };
  LinkedHashSetSerializer.prototype.collectionSize_5 = function (_this__0) {
    return _this__0._get_size__28();
  };
  LinkedHashSetSerializer.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_5((!(_this__0 == null) ? isInterface(_this__0, Set) : false) ? _this__0 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.collectionIterator_6 = function (_this__0) {
    return _this__0.iterator_38();
  };
  LinkedHashSetSerializer.prototype.collectionIterator_14 = function (_this__0) {
    return this.collectionIterator_6((!(_this__0 == null) ? isInterface(_this__0, Set) : false) ? _this__0 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.builder_16 = function () {
    return LinkedHashSet_init_$Create$();
  };
  LinkedHashSetSerializer.prototype.builderSize_2 = function (_this__0) {
    return _this__0._get_size__28();
  };
  LinkedHashSetSerializer.prototype.builderSize_14 = function (_this__0) {
    return this.builderSize_2(_this__0 instanceof LinkedHashSet ? _this__0 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.toResult_2 = function (_this__0) {
    return _this__0;
  };
  LinkedHashSetSerializer.prototype.toResult_14 = function (_this__0) {
    return this.toResult_2(_this__0 instanceof LinkedHashSet ? _this__0 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.toBuilder_6 = function (_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof LinkedHashSet ? _this__0 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__0) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_6((!(_this__0 == null) ? isInterface(_this__0, Set) : false) ? _this__0 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.checkCapacity_2 = function (_this__0, size) {
  };
  LinkedHashSetSerializer.prototype.checkCapacity_14 = function (_this__0, size) {
    return this.checkCapacity_2(_this__0 instanceof LinkedHashSet ? _this__0 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.insert_1 = function (_this__0, index, element) {
    _this__0.add_16(element);
    Unit_getInstance();
  };
  LinkedHashSetSerializer.prototype.insert_8 = function (_this__0, index, element) {
    var tmp = _this__0 instanceof LinkedHashSet ? _this__0 : THROW_CCE();
    return this.insert_1(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = {
    simpleName: 'LinkedHashSetSerializer',
    kind: 'class',
    interfaces: []
  };
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this._descriptor_2 = new ArrayListClassDesc(element._get_descriptor__57());
  }
  ArrayListSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_2;
  };
  ArrayListSerializer.prototype.collectionSize_3 = function (_this__0) {
    return _this__0._get_size__28();
  };
  ArrayListSerializer.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_3((!(_this__0 == null) ? isInterface(_this__0, List) : false) ? _this__0 : THROW_CCE());
  };
  ArrayListSerializer.prototype.collectionIterator_4 = function (_this__0) {
    return _this__0.iterator_38();
  };
  ArrayListSerializer.prototype.collectionIterator_14 = function (_this__0) {
    return this.collectionIterator_4((!(_this__0 == null) ? isInterface(_this__0, List) : false) ? _this__0 : THROW_CCE());
  };
  ArrayListSerializer.prototype.builder_16 = function () {
    return ArrayList_init_$Create$();
  };
  ArrayListSerializer.prototype.builderSize_4 = function (_this__0) {
    return _this__0._get_size__28();
  };
  ArrayListSerializer.prototype.builderSize_14 = function (_this__0) {
    return this.builderSize_4(_this__0 instanceof ArrayList ? _this__0 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toResult_4 = function (_this__0) {
    return _this__0;
  };
  ArrayListSerializer.prototype.toResult_14 = function (_this__0) {
    return this.toResult_4(_this__0 instanceof ArrayList ? _this__0 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toBuilder_4 = function (_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof ArrayList ? _this__0 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__0) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_4((!(_this__0 == null) ? isInterface(_this__0, List) : false) ? _this__0 : THROW_CCE());
  };
  ArrayListSerializer.prototype.checkCapacity_4 = function (_this__0, size) {
    return _this__0.ensureCapacity_8(size);
  };
  ArrayListSerializer.prototype.checkCapacity_14 = function (_this__0, size) {
    return this.checkCapacity_4(_this__0 instanceof ArrayList ? _this__0 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.insert_3 = function (_this__0, index, element) {
    _this__0.add_7(index, element);
  };
  ArrayListSerializer.prototype.insert_8 = function (_this__0, index, element) {
    var tmp = _this__0 instanceof ArrayList ? _this__0 : THROW_CCE();
    return this.insert_3(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = {
    simpleName: 'ArrayListSerializer',
    kind: 'class',
    interfaces: []
  };
  function HashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this._descriptor_3 = new HashSetClassDesc(eSerializer._get_descriptor__57());
  }
  HashSetSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_3;
  };
  HashSetSerializer.prototype.collectionSize_5 = function (_this__0) {
    return _this__0._get_size__28();
  };
  HashSetSerializer.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_5((!(_this__0 == null) ? isInterface(_this__0, Set) : false) ? _this__0 : THROW_CCE());
  };
  HashSetSerializer.prototype.collectionIterator_6 = function (_this__0) {
    return _this__0.iterator_38();
  };
  HashSetSerializer.prototype.collectionIterator_14 = function (_this__0) {
    return this.collectionIterator_6((!(_this__0 == null) ? isInterface(_this__0, Set) : false) ? _this__0 : THROW_CCE());
  };
  HashSetSerializer.prototype.builder_16 = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.builderSize_6 = function (_this__0) {
    return _this__0._get_size__28();
  };
  HashSetSerializer.prototype.builderSize_14 = function (_this__0) {
    return this.builderSize_6(_this__0 instanceof HashSet ? _this__0 : THROW_CCE());
  };
  HashSetSerializer.prototype.toResult_6 = function (_this__0) {
    return _this__0;
  };
  HashSetSerializer.prototype.toResult_14 = function (_this__0) {
    return this.toResult_6(_this__0 instanceof HashSet ? _this__0 : THROW_CCE());
  };
  HashSetSerializer.prototype.toBuilder_6 = function (_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof HashSet ? _this__0 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__0) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_6((!(_this__0 == null) ? isInterface(_this__0, Set) : false) ? _this__0 : THROW_CCE());
  };
  HashSetSerializer.prototype.checkCapacity_6 = function (_this__0, size) {
  };
  HashSetSerializer.prototype.checkCapacity_14 = function (_this__0, size) {
    return this.checkCapacity_6(_this__0 instanceof HashSet ? _this__0 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.insert_5 = function (_this__0, index, element) {
    _this__0.add_16(element);
    Unit_getInstance();
  };
  HashSetSerializer.prototype.insert_8 = function (_this__0, index, element) {
    var tmp = _this__0 instanceof HashSet ? _this__0 : THROW_CCE();
    return this.insert_5(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = {
    simpleName: 'HashSetSerializer',
    kind: 'class',
    interfaces: []
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this._descriptor_4 = new HashMapClassDesc(kSerializer._get_descriptor__57(), vSerializer._get_descriptor__57());
  }
  HashMapSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_4;
  };
  HashMapSerializer.prototype.collectionSize_9 = function (_this__0) {
    return _this__0._get_size__28();
  };
  HashMapSerializer.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_9((!(_this__0 == null) ? isInterface(_this__0, Map_0) : false) ? _this__0 : THROW_CCE());
  };
  HashMapSerializer.prototype.collectionIterator_10 = function (_this__0) {
    return _this__0._get_entries__5().iterator_38();
  };
  HashMapSerializer.prototype.collectionIterator_14 = function (_this__0) {
    return this.collectionIterator_10((!(_this__0 == null) ? isInterface(_this__0, Map_0) : false) ? _this__0 : THROW_CCE());
  };
  HashMapSerializer.prototype.builder_16 = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.builderSize_8 = function (_this__0) {
    return _this__0._get_size__28();
  };
  HashMapSerializer.prototype.builderSize_14 = function (_this__0) {
    return this.builderSize_8(_this__0 instanceof HashMap ? _this__0 : THROW_CCE());
  };
  HashMapSerializer.prototype.toResult_8 = function (_this__0) {
    return _this__0;
  };
  HashMapSerializer.prototype.toResult_14 = function (_this__0) {
    return this.toResult_8(_this__0 instanceof HashMap ? _this__0 : THROW_CCE());
  };
  HashMapSerializer.prototype.toBuilder_10 = function (_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof HashMap ? _this__0 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_2(_this__0) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_10((!(_this__0 == null) ? isInterface(_this__0, Map_0) : false) ? _this__0 : THROW_CCE());
  };
  HashMapSerializer.prototype.checkCapacity_8 = function (_this__0, size) {
  };
  HashMapSerializer.prototype.checkCapacity_14 = function (_this__0, size) {
    return this.checkCapacity_8(_this__0 instanceof HashMap ? _this__0 : THROW_CCE(), size);
  };
  HashMapSerializer.$metadata$ = {
    simpleName: 'HashMapSerializer',
    kind: 'class',
    interfaces: []
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this._descriptor_5 = new LinkedHashMapClassDesc(kSerializer._get_descriptor__57(), vSerializer._get_descriptor__57());
  }
  LinkedHashMapSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_5;
  };
  LinkedHashMapSerializer.prototype.collectionSize_9 = function (_this__0) {
    return _this__0._get_size__28();
  };
  LinkedHashMapSerializer.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_9((!(_this__0 == null) ? isInterface(_this__0, Map_0) : false) ? _this__0 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.collectionIterator_10 = function (_this__0) {
    return _this__0._get_entries__5().iterator_38();
  };
  LinkedHashMapSerializer.prototype.collectionIterator_14 = function (_this__0) {
    return this.collectionIterator_10((!(_this__0 == null) ? isInterface(_this__0, Map_0) : false) ? _this__0 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.builder_16 = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.builderSize_10 = function (_this__0) {
    return _this__0._get_size__28();
  };
  LinkedHashMapSerializer.prototype.builderSize_14 = function (_this__0) {
    return this.builderSize_10(_this__0 instanceof LinkedHashMap ? _this__0 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toResult_10 = function (_this__0) {
    return _this__0;
  };
  LinkedHashMapSerializer.prototype.toResult_14 = function (_this__0) {
    return this.toResult_10(_this__0 instanceof LinkedHashMap ? _this__0 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toBuilder_10 = function (_this__0) {
    var tmp0_elvis_lhs = _this__0 instanceof LinkedHashMap ? _this__0 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_2(_this__0) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_10((!(_this__0 == null) ? isInterface(_this__0, Map_0) : false) ? _this__0 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.checkCapacity_10 = function (_this__0, size) {
  };
  LinkedHashMapSerializer.prototype.checkCapacity_14 = function (_this__0, size) {
    return this.checkCapacity_10(_this__0 instanceof LinkedHashMap ? _this__0 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.$metadata$ = {
    simpleName: 'LinkedHashMapSerializer',
    kind: 'class',
    interfaces: []
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this._kClass_0 = kClass;
    this._descriptor_6 = new ArrayClassDesc(eSerializer._get_descriptor__57());
  }
  ReferenceArraySerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_6;
  };
  ReferenceArraySerializer.prototype.collectionSize_11 = function (_this__0) {
    return _this__0.length;
  };
  ReferenceArraySerializer.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_11((!(_this__0 == null) ? isArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.collectionIterator_12 = function (_this__0) {
    return arrayIterator(_this__0);
  };
  ReferenceArraySerializer.prototype.collectionIterator_14 = function (_this__0) {
    return this.collectionIterator_12((!(_this__0 == null) ? isArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.builder_16 = function () {
    return ArrayList_init_$Create$();
  };
  ReferenceArraySerializer.prototype.builderSize_12 = function (_this__0) {
    return _this__0._get_size__28();
  };
  ReferenceArraySerializer.prototype.builderSize_14 = function (_this__0) {
    return this.builderSize_12(_this__0 instanceof ArrayList ? _this__0 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toResult_12 = function (_this__0) {
    return toNativeArrayImpl(_this__0, this._kClass_0);
  };
  ReferenceArraySerializer.prototype.toResult_14 = function (_this__0) {
    return this.toResult_12(_this__0 instanceof ArrayList ? _this__0 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toBuilder_12 = function (_this__0) {
    return ArrayList_init_$Create$_1(asList(_this__0));
  };
  ReferenceArraySerializer.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_12((!(_this__0 == null) ? isArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.checkCapacity_12 = function (_this__0, size) {
    return _this__0.ensureCapacity_8(size);
  };
  ReferenceArraySerializer.prototype.checkCapacity_14 = function (_this__0, size) {
    return this.checkCapacity_12(_this__0 instanceof ArrayList ? _this__0 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.insert_7 = function (_this__0, index, element) {
    _this__0.add_7(index, element);
  };
  ReferenceArraySerializer.prototype.insert_8 = function (_this__0, index, element) {
    var tmp = _this__0 instanceof ArrayList ? _this__0 : THROW_CCE();
    return this.insert_7(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = {
    simpleName: 'ReferenceArraySerializer',
    kind: 'class',
    interfaces: []
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this._keySerializer = keySerializer;
    this._valueSerializer = valueSerializer;
  }
  MapLikeSerializer.prototype.readAll_8 = function (decoder, builder, startIndex, size) {
    var tmp0_require_0 = size >= 0;
    if (!tmp0_require_0) {
      var message_1 = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression._first_1;
    var last_0 = progression._last;
    var step_0 = progression._step_0;
    if ((step_0 > 0 ? inductionVariable <= last_0 : false) ? true : step_0 < 0 ? last_0 <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.readElement_24(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last_0));
  };
  MapLikeSerializer.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    var tmp = this._get_descriptor__57();
    var key = decoder.decodeSerializableElement$default_8(tmp, index, this._keySerializer, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp0_also_0 = decoder.decodeElementIndex_8(this._get_descriptor__57());
      var tmp0_require_0_2 = tmp0_also_0 === (index + 1 | 0);
      if (!tmp0_require_0_2) {
        var message_1_3 = '' + 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also_0;
        throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_3));
      }tmp_0 = tmp0_also_0;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.containsKey_8(key)) {
      var tmp_3 = this._valueSerializer._get_descriptor__57()._get_kind__17();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.decodeSerializableElement_8(this._get_descriptor__57(), vIndex, this._valueSerializer, getValue(builder, key));
    } else {
      {
        var tmp_4 = this._get_descriptor__57();
        tmp_1 = decoder.decodeSerializableElement$default_8(tmp_4, vIndex, this._valueSerializer, null, 8, null);
      }
    }
    var value = tmp_1;
    builder.put_4(key, value);
    Unit_getInstance();
  };
  MapLikeSerializer.prototype.serialize_15 = function (encoder, value) {
    var size = this.collectionSize_29(value);
    var composite = encoder.beginCollection_1(this._get_descriptor__57(), size);
    var iterator = this.collectionIterator_14(value);
    var index = 0;
    var tmp0_iterator_1 = iterator;
    while (tmp0_iterator_1.hasNext_13()) {
      var element_2 = tmp0_iterator_1.next_13();
      var k_4 = element_2._get_key__3();
      var v_5 = element_2._get_value__14();
      var tmp = this._get_descriptor__57();
      var tmp0_6 = index;
      index = tmp0_6 + 1 | 0;
      composite.encodeSerializableElement_1(tmp, tmp0_6, this._keySerializer, k_4);
      var tmp_0 = this._get_descriptor__57();
      var tmp1_7 = index;
      index = tmp1_7 + 1 | 0;
      composite.encodeSerializableElement_1(tmp_0, tmp1_7, this._valueSerializer, v_5);
    }
    composite.endStructure_11(this._get_descriptor__57());
  };
  MapLikeSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_15(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = {
    simpleName: 'MapLikeSerializer',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__42(this$0, $serialName) {
    this._this$0_10 = this$0;
    this._$serialName = $serialName;
  }
  _no_name_provided__42.prototype.invoke_90 = function ($this$buildSerialDescriptor) {
    var tmp0_forEach_0 = this._this$0_10._values_0;
    var indexedObject = tmp0_forEach_0;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var element_2 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var fqn_4 = '' + this._$serialName + '.' + element_2._name;
      var tmp = OBJECT_getInstance();
      var tmp_0 = [];
      var enumMemberDescriptor_5 = buildSerialDescriptor$default(fqn_4, tmp, tmp_0, null, 12, null);
      $this$buildSerialDescriptor.element$default(element_2._name, enumMemberDescriptor_5, null, false, 12, null);
    }
  };
  _no_name_provided__42.prototype.invoke_95 = function (p1) {
    this.invoke_90(p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__42.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function EnumSerializer(serialName, values_1) {
    this._values_0 = values_1;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    var tmp_1 = [];
    tmp._descriptor_7 = buildSerialDescriptor$default(serialName, tmp_0, tmp_1, _no_name_provided_$factory_33(this, serialName), 4, null);
  }
  EnumSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_7;
  };
  EnumSerializer.prototype.serialize_91 = function (encoder, value) {
    var index = indexOf(this._values_0, value);
    if (index === -1) {
      throw SerializationException_init_$Create$('' + value + ' is not a valid enum ' + this._descriptor_7._get_serialName__17() + ', ' + ('' + 'must be one of ' + contentToString(this._values_0)));
    }encoder.encodeEnum_1(this._descriptor_7, index);
  };
  EnumSerializer.prototype.deserialize_61 = function (decoder) {
    var index = decoder.decodeEnum_8(this._descriptor_7);
    if (!(0 <= index ? index <= (this._values_0.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$('' + index + ' is not among valid ' + this._descriptor_7._get_serialName__17() + ' enum values, ' + ('' + 'values size is ' + this._values_0.length));
    }return this._values_0[index];
  };
  EnumSerializer.prototype.toString = function () {
    return '' + 'kotlinx.serialization.internal.EnumSerializer<' + this._descriptor_7._get_serialName__17() + '>';
  };
  EnumSerializer.$metadata$ = {
    simpleName: 'EnumSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function _no_name_provided_$factory_33(this$0, $serialName) {
    var i = new _no_name_provided__42(this$0, $serialName);
    return function (p1) {
      i.invoke_90(p1);
      return Unit_getInstance();
    };
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new _no_name_provided__43(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this._isInline = true;
  }
  InlineClassDescriptor.prototype._get_isInline__17 = function () {
    return this._isInline;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    l$ret$1: do {
      if (this === other) {
        tmp$ret$0 = true;
        break l$ret$1;
      }if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      if (!(this._get_serialName__17() === other._get_serialName__17())) {
        tmp$ret$0 = false;
        break l$ret$1;
      }var tmp0__anonymous__3 = other;
      if (!(tmp0__anonymous__3._isInline ? contentEquals(this._get_typeParameterDescriptors__0(), tmp0__anonymous__3._get_typeParameterDescriptors__0()) : false)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      if (!(this._get_elementsCount__17() === other._get_elementsCount__17())) {
        tmp$ret$0 = false;
        break l$ret$1;
      }var inductionVariable = 0;
      var last_0 = this._get_elementsCount__17();
      if (inductionVariable < last_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_17(index_2)._get_serialName__17() === other.getElementDescriptor_17(index_2)._get_serialName__17())) {
            tmp$ret$0 = false;
            break l$ret$1;
          }if (!equals_1(this.getElementDescriptor_17(index_2)._get_kind__17(), other.getElementDescriptor_17(index_2)._get_kind__17())) {
            tmp$ret$0 = false;
            break l$ret$1;
          }}
         while (inductionVariable < last_0);
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = {
    simpleName: 'InlineClassDescriptor',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__43($primitiveSerializer) {
    this._$primitiveSerializer = $primitiveSerializer;
  }
  _no_name_provided__43.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [this._$primitiveSerializer];
    return tmp0_arrayOf_0;
  };
  _no_name_provided__43.prototype._get_descriptor__57 = function () {
    var tmp0_error_0 = 'unsupported';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  _no_name_provided__43.prototype.serialize_91 = function (encoder, value) {
    var tmp0_error_0 = 'unsupported';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  _no_name_provided__43.prototype.deserialize_61 = function (decoder) {
    var tmp0_error_0 = 'unsupported';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  _no_name_provided__43.$metadata$ = {
    kind: 'class',
    interfaces: [GeneratedSerializer]
  };
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this._descriptor_8 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_8;
  };
  UIntSerializer.prototype.serialize_19 = function (encoder, value) {
    var tmp0_safe_receiver = encoder.encodeInline_1(this._descriptor_8);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.encodeInt_1(_UInt___get_data__impl_(value));
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  UIntSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_19(encoder, value instanceof UInt ? value._data_0 : THROW_CCE());
  };
  UIntSerializer.prototype.deserialize_15 = function (decoder) {
    var tmp0_toUInt_0 = decoder.decodeInline_8(this._descriptor_8).decodeInt_8();
    return _UInt___init__impl_(tmp0_toUInt_0);
  };
  UIntSerializer.prototype.deserialize_61 = function (decoder) {
    return new UInt(this.deserialize_15(decoder));
  };
  UIntSerializer.$metadata$ = {
    simpleName: 'UIntSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this._descriptor_9 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_11()));
  }
  ULongSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_9;
  };
  ULongSerializer.prototype.serialize_21 = function (encoder, value) {
    var tmp0_safe_receiver = encoder.encodeInline_1(this._descriptor_9);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.encodeLong_1(_ULong___get_data__impl_(value));
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  ULongSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_21(encoder, value instanceof ULong ? value._data_1 : THROW_CCE());
  };
  ULongSerializer.prototype.deserialize_17 = function (decoder) {
    var tmp0_toULong_0 = decoder.decodeInline_8(this._descriptor_9).decodeLong_8();
    return _ULong___init__impl_(tmp0_toULong_0);
  };
  ULongSerializer.prototype.deserialize_61 = function (decoder) {
    return new ULong(this.deserialize_17(decoder));
  };
  ULongSerializer.$metadata$ = {
    simpleName: 'ULongSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this._descriptor_10 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_8(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_10;
  };
  UByteSerializer.prototype.serialize_23 = function (encoder, value) {
    var tmp0_safe_receiver = encoder.encodeInline_1(this._descriptor_10);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.encodeByte_1(_UByte___get_data__impl_(value));
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  UByteSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_23(encoder, value instanceof UByte ? value._data : THROW_CCE());
  };
  UByteSerializer.prototype.deserialize_19 = function (decoder) {
    var tmp0_toUByte_0 = decoder.decodeInline_8(this._descriptor_10).decodeByte_8();
    return _UByte___init__impl_(tmp0_toUByte_0);
  };
  UByteSerializer.prototype.deserialize_61 = function (decoder) {
    return new UByte(this.deserialize_19(decoder));
  };
  UByteSerializer.$metadata$ = {
    simpleName: 'UByteSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this._descriptor_11 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_11;
  };
  UShortSerializer.prototype.serialize_25 = function (encoder, value) {
    var tmp0_safe_receiver = encoder.encodeInline_1(this._descriptor_11);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.encodeShort_1(_UShort___get_data__impl_(value));
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  UShortSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_25(encoder, value instanceof UShort ? value._data_2 : THROW_CCE());
  };
  UShortSerializer.prototype.deserialize_21 = function (decoder) {
    var tmp0_toUShort_0 = decoder.decodeInline_8(this._descriptor_11).decodeShort_8();
    return _UShort___init__impl_(tmp0_toUShort_0);
  };
  UShortSerializer.prototype.deserialize_61 = function (decoder) {
    return new UShort(this.deserialize_21(decoder));
  };
  UShortSerializer.$metadata$ = {
    simpleName: 'UShortSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function jsonCachedSerialNames(_this_) {
    return cachedSerialNames(_this_);
  }
  function NullableSerializer(serializer_15) {
    this._serializer = serializer_15;
    this._descriptor_12 = new SerialDescriptorForNullable(this._serializer._get_descriptor__57());
  }
  NullableSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_12;
  };
  NullableSerializer.prototype.serialize_27 = function (encoder, value) {
    if (!(value == null)) {
      encoder.encodeNotNullMark_1();
      encoder.encodeSerializableValue_1(this._serializer, value);
    } else {
      encoder.encodeNull_1();
    }
  };
  NullableSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_27(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeNotNullMark_8() ? decoder.decodeSerializableValue_16(this._serializer) : decoder.decodeNull_8();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression_0(this).equals(getKClassFromExpression_0(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!equals_1(this._serializer, other._serializer))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this._serializer);
  };
  NullableSerializer.$metadata$ = {
    simpleName: 'NullableSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function SerialDescriptorForNullable(original) {
    this._original_0 = original;
    this._serialName_4 = this._original_0._get_serialName__17() + '?';
    this._serialNames_0 = cachedSerialNames(this._original_0);
  }
  SerialDescriptorForNullable.prototype.getElementAnnotations_17 = function (index) {
    return this._original_0.getElementAnnotations_17(index);
  };
  SerialDescriptorForNullable.prototype.getElementDescriptor_17 = function (index) {
    return this._original_0.getElementDescriptor_17(index);
  };
  SerialDescriptorForNullable.prototype.getElementIndex_17 = function (name) {
    return this._original_0.getElementIndex_17(name);
  };
  SerialDescriptorForNullable.prototype.getElementName_17 = function (index) {
    return this._original_0.getElementName_17(index);
  };
  SerialDescriptorForNullable.prototype._get_elementsCount__17 = function () {
    return this._original_0._get_elementsCount__17();
  };
  SerialDescriptorForNullable.prototype._get_isInline__17 = function () {
    return this._original_0._get_isInline__17();
  };
  SerialDescriptorForNullable.prototype._get_kind__17 = function () {
    return this._original_0._get_kind__17();
  };
  SerialDescriptorForNullable.prototype._get_serialName__17 = function () {
    return this._serialName_4;
  };
  SerialDescriptorForNullable.prototype._get_serialNames__3 = function () {
    return this._serialNames_0;
  };
  SerialDescriptorForNullable.prototype._get_isNullable__17 = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    else {
    }
    if (!equals_1(this._original_0, other._original_0))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this._original_0 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this._original_0), 31);
  };
  SerialDescriptorForNullable.$metadata$ = {
    simpleName: 'SerialDescriptorForNullable',
    kind: 'class',
    interfaces: [SerialDescriptor, CachedNames]
  };
  function ObjectSerializer(serialName, objectInstance) {
    this._objectInstance = objectInstance;
    var tmp = this;
    var tmp_0 = OBJECT_getInstance();
    var tmp_1 = [];
    tmp._descriptor_13 = buildSerialDescriptor$default(serialName, tmp_0, tmp_1, null, 12, null);
  }
  ObjectSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_13;
  };
  ObjectSerializer.prototype.serialize_91 = function (encoder, value) {
    encoder.beginStructure_11(this._descriptor_13).endStructure_11(this._descriptor_13);
  };
  ObjectSerializer.prototype.deserialize_61 = function (decoder) {
    decoder.beginStructure_11(this._descriptor_13).endStructure_11(this._descriptor_13);
    return this._objectInstance;
  };
  ObjectSerializer.$metadata$ = {
    simpleName: 'ObjectSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  var EMPTY_DESCRIPTOR_ARRAY;
  function compactArray(_this_) {
    var tmp;
    if (!(_this_ == null ? true : _this_.isEmpty_28())) {
      tmp = _this_;
    } else {
      {
        tmp = null;
      }
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = copyToArray_0(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? EMPTY_DESCRIPTOR_ARRAY : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this_) {
    if (isInterface(_this_, CachedNames))
      return _this_._get_serialNames__3();
    else {
    }
    var result = HashSet_init_$Create$_1(_this_._get_elementsCount__17());
    var inductionVariable = 0;
    var last_0 = _this_._get_elementsCount__17();
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_plusAssign_0 = _this_.getElementName_17(i);
        result.add_16(tmp0_plusAssign_0);
        Unit_getInstance();
      }
       while (inductionVariable < last_0);
    return result;
  }
  function kclass(_this_) {
    var t = _this_._get_classifier__0();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      {
        var tmp0_error_0 = '' + 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function EMPTY_DESCRIPTOR_ARRAY$init$() {
    var tmp0_arrayOf_0 = [];
    return tmp0_arrayOf_0;
  }
  function hashCodeImpl(_this_, typeParams) {
    var result = getStringHashCode(_this_._get_serialName__17());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = _get_elementDescriptors_(_this_);
    var tmp0_fold_0_1 = 1;
    var accumulator_1_2 = tmp0_fold_0_1;
    var tmp0_iterator_2_3 = elementDescriptors.iterator_38();
    while (tmp0_iterator_2_3.hasNext_13()) {
      var element_3_4 = tmp0_iterator_2_3.next_13();
      var tmp1__anonymous__4_5 = accumulator_1_2;
      var tmp = imul(31, tmp1__anonymous__4_5);
      var tmp0_hashCode_0_5_6 = element_3_4._get_serialName__17();
      var tmp0_safe_receiver_2_7_8 = tmp0_hashCode_0_5_6;
      var tmp1_elvis_lhs_1_6_7 = tmp0_safe_receiver_2_7_8 == null ? null : hashCode(tmp0_safe_receiver_2_7_8);
      accumulator_1_2 = tmp + (tmp1_elvis_lhs_1_6_7 == null ? 0 : tmp1_elvis_lhs_1_6_7) | 0;
    }
    var namesHash = accumulator_1_2;
    var tmp0_fold_0_1_0 = 1;
    var accumulator_1_2_0 = tmp0_fold_0_1_0;
    var tmp0_iterator_2_3_0 = elementDescriptors.iterator_38();
    while (tmp0_iterator_2_3_0.hasNext_13()) {
      var element_3_4_0 = tmp0_iterator_2_3_0.next_13();
      var tmp1__anonymous__4_5_0 = accumulator_1_2_0;
      var tmp_0 = imul(31, tmp1__anonymous__4_5_0);
      var tmp0_hashCode_0_5_6_0 = element_3_4_0._get_kind__17();
      var tmp0_safe_receiver_2_7_8_0 = tmp0_hashCode_0_5_6_0;
      var tmp1_elvis_lhs_1_6_7_0 = tmp0_safe_receiver_2_7_8_0 == null ? null : hashCode(tmp0_safe_receiver_2_7_8_0);
      accumulator_1_2_0 = tmp_0 + (tmp1_elvis_lhs_1_6_7_0 == null ? 0 : tmp1_elvis_lhs_1_6_7_0) | 0;
    }
    var kindHash = accumulator_1_2_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers_($this) {
    var tmp0_getValue_0 = $this._childSerializers$delegate;
    var tmp1_getValue_0 = childSerializers$factory();
    return tmp0_getValue_0._get_value__14();
  }
  function _get__hashCode__0($this) {
    var tmp0_getValue_0 = $this.__hashCode$delegate_0;
    var tmp1_getValue_0 = _hashCode$factory_0();
    return tmp0_getValue_0._get_value__14();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last_0 = $this._names.length - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_set_0 = $this._names[i];
        indices.put_4(tmp0_set_0, i);
        Unit_getInstance();
      }
       while (inductionVariable <= last_0);
    return indices;
  }
  function _no_name_provided__44(this$0) {
    this._this$0_11 = this$0;
  }
  _no_name_provided__44.prototype.invoke_93 = function () {
    var tmp0_safe_receiver = this._this$0_11._generatedSerializer;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.childSerializers_8();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = [];
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  _no_name_provided__44.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__45(this$0) {
    this._this$0_12 = this$0;
  }
  _no_name_provided__45.prototype.invoke_93 = function () {
    var tmp0_safe_receiver = this._this$0_12._generatedSerializer;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.typeParametersSerializers_8();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
      var tmp0_iterator_1_2 = arrayIterator(tmp1_safe_receiver);
      while (tmp0_iterator_1_2.hasNext_13()) {
        var item_2_3 = tmp0_iterator_1_2.next_13();
        tmp0_mapTo_0_1.add_16(item_2_3._get_descriptor__57());
        Unit_getInstance();
      }
      tmp = tmp0_mapTo_0_1;
    }
    return compactArray(tmp);
  };
  _no_name_provided__45.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__46(this$0) {
    this._this$0_13 = this$0;
  }
  _no_name_provided__46.prototype.invoke_93 = function () {
    return hashCodeImpl(this._this$0_13, this._this$0_13._get_typeParameterDescriptors__0());
  };
  _no_name_provided__46.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__47(this$0) {
    this._this$0_14 = this$0;
  }
  _no_name_provided__47.prototype.invoke_70 = function (i) {
    return this._this$0_14.getElementName_17(i) + ': ' + this._this$0_14.getElementDescriptor_17(i)._get_serialName__17();
  };
  _no_name_provided__47.prototype.invoke_95 = function (p1) {
    return this.invoke_70((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__47.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this._serialName_5 = serialName;
    this._generatedSerializer = generatedSerializer;
    this._elementsCount_2 = elementsCount;
    this._added = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this._elementsCount_2;
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp._names = tmp_2;
    var tmp_4 = this;
    var tmp0_arrayOfNulls_0 = this._elementsCount_2;
    tmp_4._propertiesAnnotations = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
    this._classAnnotations = null;
    this._elementsOptionality = booleanArray(this._elementsCount_2);
    this._indices = emptyMap();
    var tmp_5 = this;
    tmp_5._childSerializers$delegate = lazy(_no_name_provided_$factory_34(this));
    var tmp_6 = this;
    tmp_6._typeParameterDescriptors$delegate = lazy(_no_name_provided_$factory_35(this));
    var tmp_7 = this;
    tmp_7.__hashCode$delegate_0 = lazy(_no_name_provided_$factory_36(this));
  }
  PluginGeneratedSerialDescriptor.prototype._get_serialName__17 = function () {
    return this._serialName_5;
  };
  PluginGeneratedSerialDescriptor.prototype._get_elementsCount__17 = function () {
    return this._elementsCount_2;
  };
  PluginGeneratedSerialDescriptor.prototype._get_kind__17 = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype._get_serialNames__3 = function () {
    return this._indices._get_keys__5();
  };
  PluginGeneratedSerialDescriptor.prototype._get_typeParameterDescriptors__0 = function () {
    var tmp0_getValue_0 = this._typeParameterDescriptors$delegate;
    var tmp1_getValue_0 = typeParameterDescriptors$factory();
    return tmp0_getValue_0._get_value__14();
  };
  PluginGeneratedSerialDescriptor.prototype.addElement_0 = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this._added = tmp0_this._added + 1 | 0;
    this._names[tmp0_this._added] = name;
    this._elementsOptionality[this._added] = isOptional;
    this._propertiesAnnotations[this._added] = null;
    if (this._added === (this._elementsCount_2 - 1 | 0)) {
      this._indices = buildIndices(this);
    }};
  PluginGeneratedSerialDescriptor.prototype.getElementDescriptor_17 = function (index) {
    return getChecked(_get_childSerializers_(this), index)._get_descriptor__57();
  };
  PluginGeneratedSerialDescriptor.prototype.getElementAnnotations_17 = function (index) {
    var tmp0_elvis_lhs = getChecked(this._propertiesAnnotations, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.getElementName_17 = function (index) {
    return getChecked(this._names, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementIndex_17 = function (name) {
    var tmp0_elvis_lhs = this._indices.get_16(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_12();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    l$ret$1: do {
      if (this === other) {
        tmp$ret$0 = true;
        break l$ret$1;
      }if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      if (!(this._get_serialName__17() === other._get_serialName__17())) {
        tmp$ret$0 = false;
        break l$ret$1;
      }var tmp0__anonymous__3 = other;
      if (!contentEquals(this._get_typeParameterDescriptors__0(), tmp0__anonymous__3._get_typeParameterDescriptors__0())) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      if (!(this._get_elementsCount__17() === other._get_elementsCount__17())) {
        tmp$ret$0 = false;
        break l$ret$1;
      }var inductionVariable = 0;
      var last_0 = this._get_elementsCount__17();
      if (inductionVariable < last_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_17(index_2)._get_serialName__17() === other.getElementDescriptor_17(index_2)._get_serialName__17())) {
            tmp$ret$0 = false;
            break l$ret$1;
          }if (!equals_1(this.getElementDescriptor_17(index_2)._get_kind__17(), other.getElementDescriptor_17(index_2)._get_kind__17())) {
            tmp$ret$0 = false;
            break l$ret$1;
          }}
         while (inductionVariable < last_0);
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this._elementsCount_2);
    var tmp_0 = '' + this._get_serialName__17() + '(';
    return joinToString$default_0(tmp, ', ', tmp_0, ')', 0, null, _no_name_provided_$factory_37(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = {
    simpleName: 'PluginGeneratedSerialDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor, CachedNames]
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers_(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver._get_typeParameterDescriptors__0();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__0(receiver);
    }, null);
  }
  function _no_name_provided_$factory_34(this$0) {
    var i = new _no_name_provided__44(this$0);
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_35(this$0) {
    var i = new _no_name_provided__45(this$0);
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_36(this$0) {
    var i = new _no_name_provided__46(this$0);
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_37(this$0) {
    var i = new _no_name_provided__47(this$0);
    return function (p1) {
      return i.invoke_70(p1);
    };
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.prototype.typeParametersSerializers_8 = function () {
    return EMPTY_SERIALIZER_ARRAY;
  };
  GeneratedSerializer.$metadata$ = {
    simpleName: 'GeneratedSerializer',
    kind: 'interface',
    interfaces: [KSerializer]
  };
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = {
    simpleName: 'SerializerFactory',
    kind: 'interface',
    interfaces: []
  };
  function EMPTY_SERIALIZER_ARRAY$init$() {
    var tmp0_arrayOf_0 = [];
    return tmp0_arrayOf_0;
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_9()));
  }
  CharArraySerializer_0.prototype.collectionSize_14 = function (_this__0) {
    return _this__0.length;
  };
  CharArraySerializer_0.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_14((!(_this__0 == null) ? isCharArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.toBuilder_15 = function (_this__0) {
    return new CharArrayBuilder(_this__0);
  };
  CharArraySerializer_0.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_15((!(_this__0 == null) ? isCharArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.empty_7 = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.readElement_9 = function (decoder, index, builder, checkIndex) {
    builder.append_15(decoder.decodeCharElement_8(this._get_descriptor__57(), index));
  };
  CharArraySerializer_0.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    return this.readElement_9(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.writeContent_0 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeCharElement_1(this._get_descriptor__57(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.writeContent_15 = function (encoder, content, size) {
    return this.writeContent_0(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = {
    simpleName: 'CharArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.collectionSize_16 = function (_this__0) {
    return _this__0.length;
  };
  DoubleArraySerializer_0.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_16((!(_this__0 == null) ? isDoubleArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.toBuilder_17 = function (_this__0) {
    return new DoubleArrayBuilder(_this__0);
  };
  DoubleArraySerializer_0.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_17((!(_this__0 == null) ? isDoubleArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.empty_7 = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.readElement_11 = function (decoder, index, builder, checkIndex) {
    builder.append_7(decoder.decodeDoubleElement_8(this._get_descriptor__57(), index));
  };
  DoubleArraySerializer_0.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    return this.readElement_11(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.writeContent_2 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeDoubleElement_1(this._get_descriptor__57(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.writeContent_15 = function (encoder, content, size) {
    return this.writeContent_2(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = {
    simpleName: 'DoubleArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.collectionSize_18 = function (_this__0) {
    return _this__0.length;
  };
  FloatArraySerializer_0.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_18((!(_this__0 == null) ? isFloatArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.toBuilder_19 = function (_this__0) {
    return new FloatArrayBuilder(_this__0);
  };
  FloatArraySerializer_0.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_19((!(_this__0 == null) ? isFloatArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.empty_7 = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.readElement_13 = function (decoder, index, builder, checkIndex) {
    builder.append_8(decoder.decodeFloatElement_8(this._get_descriptor__57(), index));
  };
  FloatArraySerializer_0.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    return this.readElement_13(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.writeContent_4 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeFloatElement_1(this._get_descriptor__57(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.writeContent_15 = function (encoder, content, size) {
    return this.writeContent_4(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = {
    simpleName: 'FloatArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_11()));
  }
  LongArraySerializer_0.prototype.collectionSize_20 = function (_this__0) {
    return _this__0.length;
  };
  LongArraySerializer_0.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_20((!(_this__0 == null) ? isLongArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.toBuilder_21 = function (_this__0) {
    return new LongArrayBuilder(_this__0);
  };
  LongArraySerializer_0.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_21((!(_this__0 == null) ? isLongArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.empty_7 = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.readElement_15 = function (decoder, index, builder, checkIndex) {
    builder.append_14(decoder.decodeLongElement_8(this._get_descriptor__57(), index));
  };
  LongArraySerializer_0.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    return this.readElement_15(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.writeContent_6 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeLongElement_1(this._get_descriptor__57(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.writeContent_15 = function (encoder, content, size) {
    return this.writeContent_6(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = {
    simpleName: 'LongArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.collectionSize_22 = function (_this__0) {
    return _this__0.length;
  };
  IntArraySerializer_0.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_22((!(_this__0 == null) ? isIntArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.toBuilder_23 = function (_this__0) {
    return new IntArrayBuilder(_this__0);
  };
  IntArraySerializer_0.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_23((!(_this__0 == null) ? isIntArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.empty_7 = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.readElement_17 = function (decoder, index, builder, checkIndex) {
    builder.append_10(decoder.decodeIntElement_8(this._get_descriptor__57(), index));
  };
  IntArraySerializer_0.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    return this.readElement_17(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.writeContent_8 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeIntElement_1(this._get_descriptor__57(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.writeContent_15 = function (encoder, content, size) {
    return this.writeContent_8(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = {
    simpleName: 'IntArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.collectionSize_24 = function (_this__0) {
    return _this__0.length;
  };
  ShortArraySerializer_0.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_24((!(_this__0 == null) ? isShortArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.toBuilder_25 = function (_this__0) {
    return new ShortArrayBuilder(_this__0);
  };
  ShortArraySerializer_0.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_25((!(_this__0 == null) ? isShortArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.empty_7 = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.readElement_19 = function (decoder, index, builder, checkIndex) {
    builder.append_11(decoder.decodeShortElement_8(this._get_descriptor__57(), index));
  };
  ShortArraySerializer_0.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    return this.readElement_19(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.writeContent_10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeShortElement_1(this._get_descriptor__57(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.writeContent_15 = function (encoder, content, size) {
    return this.writeContent_10(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = {
    simpleName: 'ShortArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.collectionSize_26 = function (_this__0) {
    return _this__0.length;
  };
  ByteArraySerializer_0.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_26((!(_this__0 == null) ? isByteArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.toBuilder_27 = function (_this__0) {
    return new ByteArrayBuilder(_this__0);
  };
  ByteArraySerializer_0.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_27((!(_this__0 == null) ? isByteArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.empty_7 = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.readElement_21 = function (decoder, index, builder, checkIndex) {
    builder.append_12(decoder.decodeByteElement_8(this._get_descriptor__57(), index));
  };
  ByteArraySerializer_0.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    return this.readElement_21(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.writeContent_12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeByteElement_1(this._get_descriptor__57(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.writeContent_15 = function (encoder, content, size) {
    return this.writeContent_12(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = {
    simpleName: 'ByteArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.collectionSize_28 = function (_this__0) {
    return _this__0.length;
  };
  BooleanArraySerializer_0.prototype.collectionSize_29 = function (_this__0) {
    return this.collectionSize_28((!(_this__0 == null) ? isBooleanArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.toBuilder_29 = function (_this__0) {
    return new BooleanArrayBuilder(_this__0);
  };
  BooleanArraySerializer_0.prototype.toBuilder_30 = function (_this__0) {
    return this.toBuilder_29((!(_this__0 == null) ? isBooleanArray(_this__0) : false) ? _this__0 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.empty_7 = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.readElement_23 = function (decoder, index, builder, checkIndex) {
    builder.append_13(decoder.decodeBooleanElement_8(this._get_descriptor__57(), index));
  };
  BooleanArraySerializer_0.prototype.readElement_24 = function (decoder, index, builder, checkIndex) {
    return this.readElement_23(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.writeContent_14 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeBooleanElement_1(this._get_descriptor__57(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.writeContent_15 = function (encoder, content, size) {
    return this.writeContent_14(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = {
    simpleName: 'BooleanArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this._buffer_0 = bufferWithData;
    this._position = bufferWithData.length;
    this.ensureCapacity_8(10);
  }
  CharArrayBuilder.prototype._get_position__7 = function () {
    return this._position;
  };
  CharArrayBuilder.prototype.ensureCapacity_8 = function (requiredCapacity) {
    if (this._buffer_0.length < requiredCapacity)
      this._buffer_0 = copyOf(this._buffer_0, coerceAtLeast(requiredCapacity, imul(this._buffer_0.length, 2)));
  };
  CharArrayBuilder.prototype.append_15 = function (c) {
    this.ensureCapacity$default_7(0, 1, null);
    var tmp = this._buffer_0;
    var tmp0_this = this;
    var tmp1 = tmp0_this._position;
    tmp0_this._position = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.build_8 = function () {
    return copyOf(this._buffer_0, this._position);
  };
  CharArrayBuilder.$metadata$ = {
    simpleName: 'CharArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this._buffer_1 = bufferWithData;
    this._position_0 = bufferWithData.length;
    this.ensureCapacity_8(10);
  }
  DoubleArrayBuilder.prototype._get_position__7 = function () {
    return this._position_0;
  };
  DoubleArrayBuilder.prototype.ensureCapacity_8 = function (requiredCapacity) {
    if (this._buffer_1.length < requiredCapacity)
      this._buffer_1 = copyOf_0(this._buffer_1, coerceAtLeast(requiredCapacity, imul(this._buffer_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.append_7 = function (c) {
    this.ensureCapacity$default_7(0, 1, null);
    var tmp = this._buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this._position_0;
    tmp0_this._position_0 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.build_8 = function () {
    return copyOf_0(this._buffer_1, this._position_0);
  };
  DoubleArrayBuilder.$metadata$ = {
    simpleName: 'DoubleArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this._buffer_2 = bufferWithData;
    this._position_1 = bufferWithData.length;
    this.ensureCapacity_8(10);
  }
  FloatArrayBuilder.prototype._get_position__7 = function () {
    return this._position_1;
  };
  FloatArrayBuilder.prototype.ensureCapacity_8 = function (requiredCapacity) {
    if (this._buffer_2.length < requiredCapacity)
      this._buffer_2 = copyOf_1(this._buffer_2, coerceAtLeast(requiredCapacity, imul(this._buffer_2.length, 2)));
  };
  FloatArrayBuilder.prototype.append_8 = function (c) {
    this.ensureCapacity$default_7(0, 1, null);
    var tmp = this._buffer_2;
    var tmp0_this = this;
    var tmp1 = tmp0_this._position_1;
    tmp0_this._position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.build_8 = function () {
    return copyOf_1(this._buffer_2, this._position_1);
  };
  FloatArrayBuilder.$metadata$ = {
    simpleName: 'FloatArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this._buffer_3 = bufferWithData;
    this._position_2 = bufferWithData.length;
    this.ensureCapacity_8(10);
  }
  LongArrayBuilder.prototype._get_position__7 = function () {
    return this._position_2;
  };
  LongArrayBuilder.prototype.ensureCapacity_8 = function (requiredCapacity) {
    if (this._buffer_3.length < requiredCapacity)
      this._buffer_3 = copyOf_2(this._buffer_3, coerceAtLeast(requiredCapacity, imul(this._buffer_3.length, 2)));
  };
  LongArrayBuilder.prototype.append_14 = function (c) {
    this.ensureCapacity$default_7(0, 1, null);
    var tmp = this._buffer_3;
    var tmp0_this = this;
    var tmp1 = tmp0_this._position_2;
    tmp0_this._position_2 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.build_8 = function () {
    return copyOf_2(this._buffer_3, this._position_2);
  };
  LongArrayBuilder.$metadata$ = {
    simpleName: 'LongArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this._buffer_4 = bufferWithData;
    this._position_3 = bufferWithData.length;
    this.ensureCapacity_8(10);
  }
  IntArrayBuilder.prototype._get_position__7 = function () {
    return this._position_3;
  };
  IntArrayBuilder.prototype.ensureCapacity_8 = function (requiredCapacity) {
    if (this._buffer_4.length < requiredCapacity)
      this._buffer_4 = copyOf_3(this._buffer_4, coerceAtLeast(requiredCapacity, imul(this._buffer_4.length, 2)));
  };
  IntArrayBuilder.prototype.append_10 = function (c) {
    this.ensureCapacity$default_7(0, 1, null);
    var tmp = this._buffer_4;
    var tmp0_this = this;
    var tmp1 = tmp0_this._position_3;
    tmp0_this._position_3 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.build_8 = function () {
    return copyOf_3(this._buffer_4, this._position_3);
  };
  IntArrayBuilder.$metadata$ = {
    simpleName: 'IntArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this._buffer_5 = bufferWithData;
    this._position_4 = bufferWithData.length;
    this.ensureCapacity_8(10);
  }
  ShortArrayBuilder.prototype._get_position__7 = function () {
    return this._position_4;
  };
  ShortArrayBuilder.prototype.ensureCapacity_8 = function (requiredCapacity) {
    if (this._buffer_5.length < requiredCapacity)
      this._buffer_5 = copyOf_4(this._buffer_5, coerceAtLeast(requiredCapacity, imul(this._buffer_5.length, 2)));
  };
  ShortArrayBuilder.prototype.append_11 = function (c) {
    this.ensureCapacity$default_7(0, 1, null);
    var tmp = this._buffer_5;
    var tmp0_this = this;
    var tmp1 = tmp0_this._position_4;
    tmp0_this._position_4 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.build_8 = function () {
    return copyOf_4(this._buffer_5, this._position_4);
  };
  ShortArrayBuilder.$metadata$ = {
    simpleName: 'ShortArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this._buffer_6 = bufferWithData;
    this._position_5 = bufferWithData.length;
    this.ensureCapacity_8(10);
  }
  ByteArrayBuilder.prototype._get_position__7 = function () {
    return this._position_5;
  };
  ByteArrayBuilder.prototype.ensureCapacity_8 = function (requiredCapacity) {
    if (this._buffer_6.length < requiredCapacity)
      this._buffer_6 = copyOf_5(this._buffer_6, coerceAtLeast(requiredCapacity, imul(this._buffer_6.length, 2)));
  };
  ByteArrayBuilder.prototype.append_12 = function (c) {
    this.ensureCapacity$default_7(0, 1, null);
    var tmp = this._buffer_6;
    var tmp0_this = this;
    var tmp1 = tmp0_this._position_5;
    tmp0_this._position_5 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.build_8 = function () {
    return copyOf_5(this._buffer_6, this._position_5);
  };
  ByteArrayBuilder.$metadata$ = {
    simpleName: 'ByteArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this._buffer_7 = bufferWithData;
    this._position_6 = bufferWithData.length;
    this.ensureCapacity_8(10);
  }
  BooleanArrayBuilder.prototype._get_position__7 = function () {
    return this._position_6;
  };
  BooleanArrayBuilder.prototype.ensureCapacity_8 = function (requiredCapacity) {
    if (this._buffer_7.length < requiredCapacity)
      this._buffer_7 = copyOf_6(this._buffer_7, coerceAtLeast(requiredCapacity, imul(this._buffer_7.length, 2)));
  };
  BooleanArrayBuilder.prototype.append_13 = function (c) {
    this.ensureCapacity$default_7(0, 1, null);
    var tmp = this._buffer_7;
    var tmp0_this = this;
    var tmp1 = tmp0_this._position_6;
    tmp0_this._position_6 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.build_8 = function () {
    return copyOf_6(this._buffer_7, this._position_6);
  };
  BooleanArrayBuilder.$metadata$ = {
    simpleName: 'BooleanArrayBuilder',
    kind: 'class',
    interfaces: []
  };
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this._descriptor_14 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_14;
  };
  StringSerializer.prototype.serialize_38 = function (encoder, value) {
    return encoder.encodeString_1(value);
  };
  StringSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_38(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeString_8();
  };
  StringSerializer.$metadata$ = {
    simpleName: 'StringSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this._descriptor_15 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_15;
  };
  CharSerializer.prototype.serialize_40 = function (encoder, value) {
    return encoder.encodeChar_1(value);
  };
  CharSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_40(encoder, value instanceof Char ? value : THROW_CCE());
  };
  CharSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeChar_8();
  };
  CharSerializer.$metadata$ = {
    simpleName: 'CharSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this._descriptor_16 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_16;
  };
  DoubleSerializer.prototype.serialize_42 = function (encoder, value) {
    return encoder.encodeDouble_1(value);
  };
  DoubleSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_42(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeDouble_8();
  };
  DoubleSerializer.$metadata$ = {
    simpleName: 'DoubleSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this._descriptor_17 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_17;
  };
  FloatSerializer.prototype.serialize_44 = function (encoder, value) {
    return encoder.encodeFloat_1(value);
  };
  FloatSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_44(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeFloat_8();
  };
  FloatSerializer.$metadata$ = {
    simpleName: 'FloatSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this._descriptor_18 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_18;
  };
  LongSerializer.prototype.serialize_46 = function (encoder, value) {
    return encoder.encodeLong_1(value);
  };
  LongSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_46(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeLong_8();
  };
  LongSerializer.$metadata$ = {
    simpleName: 'LongSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this._descriptor_19 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_19;
  };
  IntSerializer.prototype.serialize_48 = function (encoder, value) {
    return encoder.encodeInt_1(value);
  };
  IntSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_48(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeInt_8();
  };
  IntSerializer.$metadata$ = {
    simpleName: 'IntSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this._descriptor_20 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_20;
  };
  ShortSerializer.prototype.serialize_50 = function (encoder, value) {
    return encoder.encodeShort_1(value);
  };
  ShortSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_50(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeShort_8();
  };
  ShortSerializer.$metadata$ = {
    simpleName: 'ShortSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this._descriptor_21 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_21;
  };
  ByteSerializer.prototype.serialize_52 = function (encoder, value) {
    return encoder.encodeByte_1(value);
  };
  ByteSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_52(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeByte_8();
  };
  ByteSerializer.$metadata$ = {
    simpleName: 'ByteSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this._descriptor_22 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_22;
  };
  BooleanSerializer.prototype.serialize_54 = function (encoder, value) {
    return encoder.encodeBoolean_1(value);
  };
  BooleanSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_54(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.deserialize_61 = function (decoder) {
    return decoder.decodeBoolean_8();
  };
  BooleanSerializer.$metadata$ = {
    simpleName: 'BooleanSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this._$$delegate_0 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.deserialize_42 = function (decoder) {
    this._$$delegate_0.deserialize_61(decoder);
  };
  UnitSerializer.prototype.deserialize_61 = function (decoder) {
    this.deserialize_42(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.serialize_56 = function (encoder, value) {
    this._$$delegate_0.serialize_91(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_56(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.prototype._get_descriptor__57 = function () {
    return this._$$delegate_0._descriptor_13;
  };
  UnitSerializer.$metadata$ = {
    simpleName: 'UnitSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this._serialName_6 = serialName;
    this._kind_0 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype._get_serialName__17 = function () {
    return this._serialName_6;
  };
  PrimitiveSerialDescriptor_0.prototype._get_kind__17 = function () {
    return this._kind_0;
  };
  PrimitiveSerialDescriptor_0.prototype._get_elementsCount__17 = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.getElementName_17 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementIndex_17 = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementDescriptor_17 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementAnnotations_17 = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return '' + 'PrimitiveDescriptor(' + this._serialName_6 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = {
    simpleName: 'PrimitiveSerialDescriptor',
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function builtinSerializerOrNull(_this_) {
    var tmp = BUILTIN_SERIALIZERS.get_16(_this_);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    var keys = BUILTIN_SERIALIZERS._get_keys__5();
    var tmp0_iterator = keys.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var primitive = tmp0_iterator.next_13();
      var simpleName = capitalize(ensureNotNull(primitive._get_simpleName__4()));
      var qualifiedName = '' + 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$_0(trimIndent('' + '\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }}
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.getTag_4 = function (_this__0, index) {
    return this.nested_3(this.elementName_3(_this__0, index));
  };
  NamedValueDecoder.prototype.nested_3 = function (nestedName) {
    var tmp0_elvis_lhs = this._get_currentTagOrNull__4();
    return this.composeName_3(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.elementName_3 = function (desc, index) {
    return desc.getElementName_17(index);
  };
  NamedValueDecoder.prototype.composeName_3 = function (parentName, childName) {
    var tmp;
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      {
        tmp = '' + parentName + '.' + childName;
      }
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = {
    simpleName: 'NamedValueDecoder',
    kind: 'class',
    interfaces: []
  };
  function tagBlock($this, tag, block) {
    $this.pushTag_0(tag);
    var r = block();
    if (!$this._flag) {
      $this.popTag_4();
      Unit_getInstance();
    }$this._flag = false;
    return r;
  }
  function _no_name_provided__48(this$0, $deserializer, $previousValue) {
    this._this$0_15 = this$0;
    this._$deserializer = $deserializer;
    this._$previousValue = $previousValue;
  }
  _no_name_provided__48.prototype.invoke_93 = function () {
    return this._this$0_15.decodeSerializableValue_17(this._$deserializer, this._$previousValue);
  };
  _no_name_provided__48.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__49(this$0, $deserializer, $previousValue) {
    this._this$0_16 = this$0;
    this._$deserializer_0 = $deserializer;
    this._$previousValue_0 = $previousValue;
  }
  _no_name_provided__49.prototype.invoke_93 = function () {
    return this._this$0_16.decodeNotNullMark_8() ? this._this$0_16.decodeSerializableValue_17(this._$deserializer_0, this._$previousValue_0) : this._this$0_16.decodeNull_8();
  };
  _no_name_provided__49.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function TaggedDecoder() {
    var tmp = this;
    tmp._tagStack = ArrayList_init_$Create$();
    this._flag = false;
  }
  TaggedDecoder.prototype._get_serializersModule__15 = function () {
    return EmptySerializersModule;
  };
  TaggedDecoder.prototype.decodeTaggedValue_0 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression_0(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.decodeTaggedNotNullMark_2 = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.decodeTaggedBoolean_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedByte_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedShort_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedInt_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedLong_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedFloat_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedDouble_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedChar_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return tmp instanceof Char ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedString_2 = function (tag) {
    var tmp = this.decodeTaggedValue_0(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedEnum_2 = function (tag, enumDescriptor) {
    var tmp = this.decodeTaggedValue_0(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedInline_2 = function (tag, inlineDescriptor) {
    this.pushTag_0(tag);
    return this;
  };
  TaggedDecoder.prototype.decodeSerializableValue_17 = function (deserializer, previousValue) {
    return this.decodeSerializableValue_16(deserializer);
  };
  TaggedDecoder.prototype.decodeInline_8 = function (inlineDescriptor) {
    return this.decodeTaggedInline_2(this.popTag_4(), inlineDescriptor);
  };
  TaggedDecoder.prototype.decodeNotNullMark_8 = function () {
    var tmp0_elvis_lhs = this._get_currentTagOrNull__4();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.decodeTaggedNotNullMark_2(currentTag);
  };
  TaggedDecoder.prototype.decodeNull_8 = function () {
    return null;
  };
  TaggedDecoder.prototype.decodeBoolean_8 = function () {
    return this.decodeTaggedBoolean_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeByte_8 = function () {
    return this.decodeTaggedByte_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeShort_8 = function () {
    return this.decodeTaggedShort_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeInt_8 = function () {
    return this.decodeTaggedInt_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeLong_8 = function () {
    return this.decodeTaggedLong_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeFloat_8 = function () {
    return this.decodeTaggedFloat_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeDouble_8 = function () {
    return this.decodeTaggedDouble_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeChar_8 = function () {
    return this.decodeTaggedChar_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeString_8 = function () {
    return this.decodeTaggedString_2(this.popTag_4());
  };
  TaggedDecoder.prototype.decodeEnum_8 = function (enumDescriptor) {
    return this.decodeTaggedEnum_2(this.popTag_4(), enumDescriptor);
  };
  TaggedDecoder.prototype.beginStructure_11 = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.endStructure_11 = function (descriptor) {
  };
  TaggedDecoder.prototype.decodeBooleanElement_8 = function (descriptor, index) {
    return this.decodeTaggedBoolean_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeByteElement_8 = function (descriptor, index) {
    return this.decodeTaggedByte_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeShortElement_8 = function (descriptor, index) {
    return this.decodeTaggedShort_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeIntElement_8 = function (descriptor, index) {
    return this.decodeTaggedInt_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeLongElement_8 = function (descriptor, index) {
    return this.decodeTaggedLong_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeFloatElement_8 = function (descriptor, index) {
    return this.decodeTaggedFloat_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeDoubleElement_8 = function (descriptor, index) {
    return this.decodeTaggedDouble_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeCharElement_8 = function (descriptor, index) {
    return this.decodeTaggedChar_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeStringElement_8 = function (descriptor, index) {
    return this.decodeTaggedString_2(this.getTag_4(descriptor, index));
  };
  TaggedDecoder.prototype.decodeSerializableElement_8 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.getTag_4(descriptor, index);
    return tagBlock(this, tmp, _no_name_provided_$factory_38(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.decodeNullableSerializableElement_8 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.getTag_4(descriptor, index);
    return tagBlock(this, tmp, _no_name_provided_$factory_39(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype._get_currentTagOrNull__4 = function () {
    return lastOrNull(this._tagStack);
  };
  TaggedDecoder.prototype.pushTag_0 = function (name) {
    this._tagStack.add_16(name);
    Unit_getInstance();
  };
  TaggedDecoder.prototype.popTag_4 = function () {
    var r = this._tagStack.removeAt_1(_get_lastIndex__0(this._tagStack));
    this._flag = true;
    return r;
  };
  TaggedDecoder.$metadata$ = {
    simpleName: 'TaggedDecoder',
    kind: 'class',
    interfaces: [Decoder, CompositeDecoder]
  };
  function _no_name_provided_$factory_38(this$0, $deserializer, $previousValue) {
    var i = new _no_name_provided__48(this$0, $deserializer, $previousValue);
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_39(this$0, $deserializer, $previousValue) {
    var i = new _no_name_provided__49(this$0, $deserializer, $previousValue);
    return function () {
      return i.invoke_93();
    };
  }
  var NULL;
  function MapEntry(key, value) {
    this._key_0 = key;
    this._value_1 = value;
  }
  MapEntry.prototype._get_key__3 = function () {
    return this._key_0;
  };
  MapEntry.prototype._get_value__14 = function () {
    return this._value_1;
  };
  MapEntry.prototype.toString = function () {
    return '' + 'MapEntry(key=' + this._key_0 + ', value=' + this._value_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this._key_0 == null ? 0 : hashCode(this._key_0);
    result = imul(result, 31) + (this._value_1 == null ? 0 : hashCode(this._value_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals_1(this._key_0, tmp0_other_with_cast._key_0))
      return false;
    if (!equals_1(this._value_1, tmp0_other_with_cast._value_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = {
    simpleName: 'MapEntry',
    kind: 'class',
    interfaces: [Entry]
  };
  function _no_name_provided__50($keySerializer, $valueSerializer) {
    this._$keySerializer = $keySerializer;
    this._$valueSerializer = $valueSerializer;
  }
  _no_name_provided__50.prototype.invoke_90 = function ($this$buildSerialDescriptor) {
    var tmp = this._$keySerializer._get_descriptor__57();
    $this$buildSerialDescriptor.element$default('key', tmp, null, false, 12, null);
    var tmp_0 = this._$valueSerializer._get_descriptor__57();
    $this$buildSerialDescriptor.element$default('value', tmp_0, null, false, 12, null);
  };
  _no_name_provided__50.prototype.invoke_95 = function (p1) {
    this.invoke_90(p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__50.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    var tmp_1 = [];
    tmp._descriptor_23 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, tmp_1, _no_name_provided_$factory_40(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype._get_descriptor__57 = function () {
    return this._descriptor_23;
  };
  MapEntrySerializer_0.prototype._get_key__4 = function (_this__0) {
    return _this__0._get_key__3();
  };
  MapEntrySerializer_0.prototype._get_key__8 = function (_this__0) {
    return this._get_key__4((!(_this__0 == null) ? isInterface(_this__0, Entry) : false) ? _this__0 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype._get_value__6 = function (_this__0) {
    return _this__0._get_value__14();
  };
  MapEntrySerializer_0.prototype._get_value__10 = function (_this__0) {
    return this._get_value__6((!(_this__0 == null) ? isInterface(_this__0, Entry) : false) ? _this__0 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.toResult_25 = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = {
    simpleName: 'MapEntrySerializer',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__51($keySerializer, $valueSerializer) {
    this._$keySerializer_0 = $keySerializer;
    this._$valueSerializer_0 = $valueSerializer;
  }
  _no_name_provided__51.prototype.invoke_90 = function ($this$buildClassSerialDescriptor) {
    var tmp = this._$keySerializer_0._get_descriptor__57();
    $this$buildClassSerialDescriptor.element$default('first', tmp, null, false, 12, null);
    var tmp_0 = this._$valueSerializer_0._get_descriptor__57();
    $this$buildClassSerialDescriptor.element$default('second', tmp_0, null, false, 12, null);
  };
  _no_name_provided__51.prototype.invoke_95 = function (p1) {
    this.invoke_90(p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__51.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = [];
    tmp._descriptor_24 = buildClassSerialDescriptor$default('kotlin.Pair', tmp_0, _no_name_provided_$factory_41(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype._get_descriptor__57 = function () {
    return this._descriptor_24;
  };
  PairSerializer_0.prototype._get_key__6 = function (_this__0) {
    return _this__0._first;
  };
  PairSerializer_0.prototype._get_key__8 = function (_this__0) {
    return this._get_key__6(_this__0 instanceof Pair ? _this__0 : THROW_CCE());
  };
  PairSerializer_0.prototype._get_value__8 = function (_this__0) {
    return _this__0._second;
  };
  PairSerializer_0.prototype._get_value__10 = function (_this__0) {
    return this._get_value__8(_this__0 instanceof Pair ? _this__0 : THROW_CCE());
  };
  PairSerializer_0.prototype.toResult_25 = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = {
    simpleName: 'PairSerializer',
    kind: 'class',
    interfaces: []
  };
  function decodeSequentially_0($this, composite) {
    var a = composite.decodeSerializableElement$default_8($this._descriptor_25, 0, $this._aSerializer, null, 8, null);
    var b = composite.decodeSerializableElement$default_8($this._descriptor_25, 1, $this._bSerializer, null, 8, null);
    var c = composite.decodeSerializableElement$default_8($this._descriptor_25, 2, $this._cSerializer, null, 8, null);
    composite.endStructure_11($this._descriptor_25);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = NULL;
    var b = NULL;
    var c = NULL;
    mainLoop: while (true) {
      var index = composite.decodeElementIndex_8($this._descriptor_25);
      Companion_getInstance_12();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.decodeSerializableElement$default_8($this._descriptor_25, 0, $this._aSerializer, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.decodeSerializableElement$default_8($this._descriptor_25, 1, $this._bSerializer, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.decodeSerializableElement$default_8($this._descriptor_25, 2, $this._cSerializer, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('' + 'Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.endStructure_11($this._descriptor_25);
    if (a === NULL)
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === NULL)
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === NULL)
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function _no_name_provided__52(this$0) {
    this._this$0_17 = this$0;
  }
  _no_name_provided__52.prototype.invoke_90 = function ($this$buildClassSerialDescriptor) {
    var tmp = this._this$0_17._aSerializer._get_descriptor__57();
    $this$buildClassSerialDescriptor.element$default('first', tmp, null, false, 12, null);
    var tmp_0 = this._this$0_17._bSerializer._get_descriptor__57();
    $this$buildClassSerialDescriptor.element$default('second', tmp_0, null, false, 12, null);
    var tmp_1 = this._this$0_17._cSerializer._get_descriptor__57();
    $this$buildClassSerialDescriptor.element$default('third', tmp_1, null, false, 12, null);
  };
  _no_name_provided__52.prototype.invoke_95 = function (p1) {
    this.invoke_90(p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__52.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this._aSerializer = aSerializer;
    this._bSerializer = bSerializer;
    this._cSerializer = cSerializer;
    var tmp = this;
    var tmp_0 = [];
    tmp._descriptor_25 = buildClassSerialDescriptor$default('kotlin.Triple', tmp_0, _no_name_provided_$factory_42(this), 2, null);
  }
  TripleSerializer_0.prototype._get_descriptor__57 = function () {
    return this._descriptor_25;
  };
  TripleSerializer_0.prototype.serialize_60 = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_11(this._descriptor_25);
    structuredEncoder.encodeSerializableElement_1(this._descriptor_25, 0, this._aSerializer, value._first_0);
    structuredEncoder.encodeSerializableElement_1(this._descriptor_25, 1, this._bSerializer, value._second_0);
    structuredEncoder.encodeSerializableElement_1(this._descriptor_25, 2, this._cSerializer, value._third);
    structuredEncoder.endStructure_11(this._descriptor_25);
  };
  TripleSerializer_0.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_60(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.deserialize_61 = function (decoder) {
    var composite = decoder.beginStructure_11(this._descriptor_25);
    if (composite.decodeSequentially_8()) {
      return decodeSequentially_0(this, composite);
    }return decodeStructure(this, composite);
  };
  TripleSerializer_0.$metadata$ = {
    simpleName: 'TripleSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this._keySerializer_0 = keySerializer;
    this._valueSerializer_0 = valueSerializer;
  }
  KeyValueSerializer.prototype.serialize_62 = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_11(this._get_descriptor__57());
    structuredEncoder.encodeSerializableElement_1(this._get_descriptor__57(), 0, this._keySerializer_0, this._get_key__8(value));
    structuredEncoder.encodeSerializableElement_1(this._get_descriptor__57(), 1, this._valueSerializer_0, this._get_value__10(value));
    structuredEncoder.endStructure_11(this._get_descriptor__57());
  };
  KeyValueSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_62(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.deserialize_61 = function (decoder) {
    var composite = decoder.beginStructure_11(this._get_descriptor__57());
    if (composite.decodeSequentially_8()) {
      var tmp = this._get_descriptor__57();
      var key = composite.decodeSerializableElement$default_8(tmp, 0, this._keySerializer_0, null, 8, null);
      var tmp_0 = this._get_descriptor__57();
      var value = composite.decodeSerializableElement$default_8(tmp_0, 1, this._valueSerializer_0, null, 8, null);
      return this.toResult_25(key, value);
    }var key_0 = NULL;
    var value_0 = NULL;
    mainLoop: while (true) {
      var idx = composite.decodeElementIndex_8(this._get_descriptor__57());
      Companion_getInstance_12();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this._get_descriptor__57();
          key_0 = composite.decodeSerializableElement$default_8(tmp_1, 0, this._keySerializer_0, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this._get_descriptor__57();
            value_0 = composite.decodeSerializableElement$default_8(tmp_2, 1, this._valueSerializer_0, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('' + 'Invalid index: ' + idx);
          }
        }
      }
    }
    composite.endStructure_11(this._get_descriptor__57());
    if (key_0 === NULL)
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === NULL)
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.toResult_25(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = {
    simpleName: 'KeyValueSerializer',
    kind: 'class',
    interfaces: [KSerializer]
  };
  function _no_name_provided_$factory_40($keySerializer, $valueSerializer) {
    var i = new _no_name_provided__50($keySerializer, $valueSerializer);
    return function (p1) {
      i.invoke_90(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_41($keySerializer, $valueSerializer) {
    var i = new _no_name_provided__51($keySerializer, $valueSerializer);
    return function (p1) {
      i.invoke_90(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_42(this$0) {
    var i = new _no_name_provided__52(this$0);
    return function (p1) {
      i.invoke_90(p1);
      return Unit_getInstance();
    };
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.getContextual$default = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.getContextual_0(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = {
    simpleName: 'SerializersModule',
    kind: 'class',
    interfaces: []
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2NamedSerializers, polyBase2DefaultProvider) {
    SerializersModule.call(this);
    this._class2ContextualFactory = class2ContextualFactory;
    this._polyBase2Serializers = polyBase2Serializers;
    this._polyBase2NamedSerializers = polyBase2NamedSerializers;
    this._polyBase2DefaultProvider = polyBase2DefaultProvider;
  }
  SerialModuleImpl.prototype.getPolymorphic_1 = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this._polyBase2Serializers.get_16(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_16(getKClassFromExpression_0(value));
    return (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
  };
  SerialModuleImpl.prototype.getPolymorphic_2 = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this._polyBase2NamedSerializers.get_16(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map_0) : false) ? tmp0_safe_receiver : THROW_CCE()).get_16(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this._polyBase2DefaultProvider.get_16(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.getContextual_0 = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this._class2ContextualFactory.get_16(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.invoke_81(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.dumpTo_0 = function (collector) {
    var tmp0_forEach_0 = this._class2ContextualFactory;
    var tmp0_iterator_1 = tmp0_forEach_0._get_entries__5().iterator_38();
    while (tmp0_iterator_1.hasNext_13()) {
      var element_2 = tmp0_iterator_1.next_13();
      var kclass_4 = element_2._get_key__3();
      var serial_5 = element_2._get_value__14();
      var tmp0_subject_6 = serial_5;
      if (tmp0_subject_6 instanceof Argless) {
        var tmp = isInterface(kclass_4, KClass) ? kclass_4 : THROW_CCE();
        var tmp_0 = serial_5._serializer_0;
        collector.contextual_2(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject_6 instanceof WithTypeArguments)
          collector.contextual_1(kclass_4, serial_5._provider);
        else {
        }
      }
    }
    var tmp1_forEach_0 = this._polyBase2Serializers;
    var tmp0_iterator_1_0 = tmp1_forEach_0._get_entries__5().iterator_38();
    while (tmp0_iterator_1_0.hasNext_13()) {
      var element_2_0 = tmp0_iterator_1_0.next_13();
      var baseClass_4 = element_2_0._get_key__3();
      var classMap_5 = element_2_0._get_value__14();
      var tmp0_iterator_1_6 = classMap_5._get_entries__5().iterator_38();
      while (tmp0_iterator_1_6.hasNext_13()) {
        var element_2_7 = tmp0_iterator_1_6.next_13();
        var actualClass_4_8 = element_2_7._get_key__3();
        var serializer_5_9 = element_2_7._get_value__14();
        var tmp_1 = isInterface(baseClass_4, KClass) ? baseClass_4 : THROW_CCE();
        var tmp_2 = isInterface(actualClass_4_8, KClass) ? actualClass_4_8 : THROW_CCE();
        collector.polymorphic_0(tmp_1, tmp_2, isInterface(serializer_5_9, KSerializer) ? serializer_5_9 : THROW_CCE());
      }
    }
    var tmp2_forEach_0 = this._polyBase2DefaultProvider;
    var tmp0_iterator_1_1 = tmp2_forEach_0._get_entries__5().iterator_38();
    while (tmp0_iterator_1_1.hasNext_13()) {
      var element_2_1 = tmp0_iterator_1_1.next_13();
      var baseClass_4_0 = element_2_1._get_key__3();
      var provider_5 = element_2_1._get_value__14();
      var tmp_3 = isInterface(baseClass_4_0, KClass) ? baseClass_4_0 : THROW_CCE();
      collector.polymorphicDefault_0(tmp_3, typeof provider_5 === 'function' ? provider_5 : THROW_CCE());
    }
  };
  SerialModuleImpl.$metadata$ = {
    simpleName: 'SerialModuleImpl',
    kind: 'class',
    interfaces: []
  };
  function Argless() {
  }
  Argless.$metadata$ = {
    simpleName: 'Argless',
    kind: 'class',
    interfaces: []
  };
  function WithTypeArguments() {
  }
  WithTypeArguments.$metadata$ = {
    simpleName: 'WithTypeArguments',
    kind: 'class',
    interfaces: []
  };
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = {
    simpleName: 'ContextualProvider',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__53($serializer_7) {
    this._$serializer = $serializer_7;
  }
  _no_name_provided__53.prototype.invoke_81 = function (it) {
    return this._$serializer;
  };
  _no_name_provided__53.prototype.invoke_95 = function (p1) {
    return this.invoke_81((!(p1 == null) ? isInterface(p1, List) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__53.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.prototype.contextual_2 = function (kClass, serializer_15) {
    return this.contextual_1(kClass, _no_name_provided_$factory_43(serializer_15));
  };
  SerializersModuleCollector.$metadata$ = {
    simpleName: 'SerializersModuleCollector',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_43($serializer_7) {
    var i = new _no_name_provided__53($serializer_7);
    return function (p1) {
      return i.invoke_81(p1);
    };
  }
  function SerializableWith() {
  }
  SerializableWith.$metadata$ = {
    simpleName: 'SerializableWith',
    kind: 'class',
    interfaces: [Annotation],
    associatedObjectKey: 0
  };
  function isInstanceOf(_this_, kclass_0) {
    return kclass_0.isInstance_4(_this_);
  }
  function getChecked(_this_, index) {
    if (!(0 <= index ? index <= (_this_.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('' + 'Index ' + index + ' out of bounds ' + _get_indices_(_this_));
    return _this_[index];
  }
  function platformSpecificSerializerNotRegistered(_this_) {
    throw SerializationException_init_$Create$('' + "Serializer for class '" + _this_._get_simpleName__4() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function compiledSerializerImpl(_this_) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this_, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_asDynamic_0 = _get_js_(_this_);
      var tmp0_safe_receiver = tmp0_asDynamic_0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance()._get_arrayClass_());
  }
  function constructSerializerForGivenTypeArgs(_this_, args) {
    var tmp;
    try {
      var assocObject = findAssociatedObject(_this_, getKClass_0(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.serializer(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (_get_isInterface_(_this_)) {
            tmp_0 = new PolymorphicSerializer(_this_);
          } else {
            {
              tmp_0 = null;
            }
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function _get_isInterface_(_this_) {
    var tmp0_asDynamic_0 = _get_js_(_this_);
    var tmp0_safe_receiver = tmp0_asDynamic_0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this_, eClass) {
    return copyToArray_0(_this_);
  }
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, null, false, false, null, false, false, 2047, null), EmptySerializersModule);
  }
  Default.$metadata$ = {
    simpleName: 'Default',
    kind: 'object',
    interfaces: []
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this._configuration = configuration;
    this._serializersModule = serializersModule;
    this._schemaCache = new DescriptorSchemaCache();
  }
  Json.prototype._get_configuration__3 = function () {
    return this._configuration;
  };
  Json.prototype._get_serializersModule__15 = function () {
    return this._serializersModule;
  };
  Json.prototype.encodeToString_2 = function (serializer_15, value) {
    var result = new JsonStringBuilder();
    try {
      var tmp = WriteMode_OBJ_getInstance();
      var tmp0_arrayOfNulls_0 = values().length;
      var encoder = StreamingJsonEncoder_init_$Create$(result, this, tmp, fillArrayVal(Array(tmp0_arrayOfNulls_0), null));
      encoder.encodeSerializableValue_1(serializer_15, value);
      return result.toString();
    }finally {
      result.release();
    }
  };
  Json.prototype.decodeFromString_2 = function (deserializer, string) {
    var lexer = new JsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer);
    var result = input.decodeSerializableValue_16(deserializer);
    lexer.expectEof();
    return result;
  };
  Json.$metadata$ = {
    simpleName: 'Json',
    kind: 'class',
    interfaces: [StringFormat]
  };
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.build_8();
    return new JsonImpl(conf, builder._serializersModule_0);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this._encodeDefaults = json._configuration._encodeDefaults_0;
    this._ignoreUnknownKeys = json._configuration._ignoreUnknownKeys_0;
    this._isLenient = json._configuration._isLenient_0;
    this._allowStructuredMapKeys = json._configuration._allowStructuredMapKeys_0;
    this._prettyPrint = json._configuration._prettyPrint_0;
    this._prettyPrintIndent = json._configuration._prettyPrintIndent_0;
    this._coerceInputValues = json._configuration._coerceInputValues_0;
    this._useArrayPolymorphism = json._configuration._useArrayPolymorphism_0;
    this._classDiscriminator = json._configuration._classDiscriminator_0;
    this._allowSpecialFloatingPointValues = json._configuration._allowSpecialFloatingPointValues_0;
    this._useAlternativeNames = json._configuration._useAlternativeNames_0;
    this._serializersModule_0 = json._get_serializersModule__15();
  }
  JsonBuilder.prototype.build_8 = function () {
    if (this._useArrayPolymorphism) {
      var tmp0_require_0 = this._classDiscriminator === 'type';
      if (!tmp0_require_0) {
        var message_1 = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
      }}if (!this._prettyPrint) {
      var tmp1_require_0 = this._prettyPrintIndent === '    ';
      if (!tmp1_require_0) {
        var message_1_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_0));
      }} else if (!(this._prettyPrintIndent === '    ')) {
      var tmp$ret$0;
      l$ret$1: do {
        var tmp2_all_0 = this._prettyPrintIndent;
        var indexedObject = tmp2_all_0;
        var inductionVariable = 0;
        var last_0 = indexedObject.length;
        while (inductionVariable < last_0) {
          var element_2 = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(((element_2.equals(new Char(32)) ? true : element_2.equals(new Char(9))) ? true : element_2.equals(new Char(13))) ? true : element_2.equals(new Char(10)))) {
            tmp$ret$0 = false;
            break l$ret$1;
          } else {
          }
        }
        tmp$ret$0 = true;
      }
       while (false);
      var allWhitespaces = tmp$ret$0;
      if (!allWhitespaces) {
        var message_1_1 = '' + 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this._prettyPrintIndent;
        throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_1));
      }}return new JsonConfiguration(this._encodeDefaults, this._ignoreUnknownKeys, this._isLenient, this._allowStructuredMapKeys, this._prettyPrint, this._prettyPrintIndent, this._coerceInputValues, this._useArrayPolymorphism, this._classDiscriminator, this._allowSpecialFloatingPointValues, this._useAlternativeNames);
  };
  JsonBuilder.$metadata$ = {
    simpleName: 'JsonBuilder',
    kind: 'class',
    interfaces: []
  };
  function validateConfiguration($this) {
    if (equals_1($this._get_serializersModule__15(), EmptySerializersModule))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this._get_configuration__3()._useArrayPolymorphism_0, $this._get_configuration__3()._classDiscriminator_0);
    $this._get_serializersModule__15().dumpTo_0(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  JsonImpl.$metadata$ = {
    simpleName: 'JsonImpl',
    kind: 'class',
    interfaces: []
  };
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 64) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 128) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 256) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 512) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 1024) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this._encodeDefaults_0 = encodeDefaults;
    this._ignoreUnknownKeys_0 = ignoreUnknownKeys;
    this._isLenient_0 = isLenient;
    this._allowStructuredMapKeys_0 = allowStructuredMapKeys;
    this._prettyPrint_0 = prettyPrint;
    this._prettyPrintIndent_0 = prettyPrintIndent;
    this._coerceInputValues_0 = coerceInputValues;
    this._useArrayPolymorphism_0 = useArrayPolymorphism;
    this._classDiscriminator_0 = classDiscriminator;
    this._allowSpecialFloatingPointValues_0 = allowSpecialFloatingPointValues;
    this._useAlternativeNames_0 = useAlternativeNames;
  }
  JsonConfiguration.prototype.toString = function () {
    return '' + 'JsonConfiguration(encodeDefaults=' + this._encodeDefaults_0 + ', ignoreUnknownKeys=' + this._ignoreUnknownKeys_0 + ', isLenient=' + this._isLenient_0 + ', allowStructuredMapKeys=' + this._allowStructuredMapKeys_0 + ', prettyPrint=' + this._prettyPrint_0 + ", prettyPrintIndent='" + this._prettyPrintIndent_0 + "', coerceInputValues=" + this._coerceInputValues_0 + ', useArrayPolymorphism=' + this._useArrayPolymorphism_0 + ", classDiscriminator='" + this._classDiscriminator_0 + "', allowSpecialFloatingPointValues=" + this._allowSpecialFloatingPointValues_0 + ')';
  };
  JsonConfiguration.$metadata$ = {
    simpleName: 'JsonConfiguration',
    kind: 'class',
    interfaces: []
  };
  function JsonDecoder() {
  }
  JsonDecoder.$metadata$ = {
    simpleName: 'JsonDecoder',
    kind: 'interface',
    interfaces: [Decoder, CompositeDecoder]
  };
  function Companion_14() {
    Companion_instance_13 = this;
  }
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_14();
    return Companion_instance_13;
  }
  function _no_name_provided__54() {
  }
  _no_name_provided__54.prototype.invoke_83 = function (_name_for_destructuring_parameter_0_) {
    var k = _name_for_destructuring_parameter_0_._get_key__3();
    var v = _name_for_destructuring_parameter_0_._get_value__14();
    var tmp0_apply_0_1 = StringBuilder_init_$Create$_0();
    printQuoted(tmp0_apply_0_1, k);
    tmp0_apply_0_1.append_1(new Char(58));
    Unit_getInstance();
    tmp0_apply_0_1.append_4(v);
    Unit_getInstance();
    return tmp0_apply_0_1.toString();
  };
  _no_name_provided__54.prototype.invoke_95 = function (p1) {
    return this.invoke_83((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__54.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function JsonObject(content) {
    Companion_getInstance_13();
    JsonElement.call(this);
    this._content = content;
  }
  JsonObject.prototype.containsKey_7 = function (key) {
    return this._content.containsKey_8(key);
  };
  JsonObject.prototype.containsKey_8 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    else {
    }
    return this.containsKey_7((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.get_15 = function (key) {
    return this._content.get_16(key);
  };
  JsonObject.prototype.get_16 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    else {
    }
    return this.get_15((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.isEmpty_28 = function () {
    return this._content.isEmpty_28();
  };
  JsonObject.prototype._get_entries__5 = function () {
    return this._content._get_entries__5();
  };
  JsonObject.prototype._get_keys__5 = function () {
    return this._content._get_keys__5();
  };
  JsonObject.prototype._get_size__28 = function () {
    return this._content._get_size__28();
  };
  JsonObject.prototype.equals = function (other) {
    return equals_1(this._content, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this._content);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this._content._get_entries__5();
    return joinToString$default_0(tmp, ',', '{', '}', 0, null, _no_name_provided_$factory_44(), 24, null);
  };
  JsonObject.$metadata$ = {
    simpleName: 'JsonObject',
    kind: 'class',
    interfaces: [Map_0],
    associatedObjects: {0: JsonObjectSerializer_getInstance}
  };
  function Companion_15() {
    Companion_instance_14 = this;
  }
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_15();
    return Companion_instance_14;
  }
  function JsonElement() {
    Companion_getInstance_14();
  }
  JsonElement.$metadata$ = {
    simpleName: 'JsonElement',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: JsonElementSerializer_getInstance}
  };
  function Companion_16() {
    Companion_instance_15 = this;
  }
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_16();
    return Companion_instance_15;
  }
  function JsonPrimitive() {
    Companion_getInstance_15();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this._get_content__1();
  };
  JsonPrimitive.$metadata$ = {
    simpleName: 'JsonPrimitive',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: JsonPrimitiveSerializer_getInstance}
  };
  function Companion_17() {
    Companion_instance_16 = this;
  }
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_17();
    return Companion_instance_16;
  }
  function JsonArray(content) {
    Companion_getInstance_16();
    JsonElement.call(this);
    this._content_0 = content;
  }
  JsonArray.prototype.contains_25 = function (element) {
    return this._content_0.contains_26(element);
  };
  JsonArray.prototype.contains_26 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    else {
    }
    return this.contains_25(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.containsAll_20 = function (elements) {
    return this._content_0.containsAll_21(elements);
  };
  JsonArray.prototype.containsAll_21 = function (elements) {
    return this.containsAll_20(elements);
  };
  JsonArray.prototype.get_28 = function (index) {
    return this._content_0.get_28(index);
  };
  JsonArray.prototype.indexOf_4 = function (element) {
    return this._content_0.indexOf_5(element);
  };
  JsonArray.prototype.indexOf_5 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    else {
    }
    return this.indexOf_4(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.isEmpty_28 = function () {
    return this._content_0.isEmpty_28();
  };
  JsonArray.prototype.iterator_38 = function () {
    return this._content_0.iterator_38();
  };
  JsonArray.prototype._get_size__28 = function () {
    return this._content_0._get_size__28();
  };
  JsonArray.prototype.equals = function (other) {
    return equals_1(this._content_0, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this._content_0);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default_0(this._content_0, ',', '[', ']', 0, null, null, 56, null);
  };
  JsonArray.$metadata$ = {
    simpleName: 'JsonArray',
    kind: 'class',
    interfaces: [List],
    associatedObjects: {0: JsonArraySerializer_getInstance}
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this._content_1 = 'null';
  }
  JsonNull.prototype._get_content__1 = function () {
    return this._content_1;
  };
  JsonNull.$metadata$ = {
    simpleName: 'JsonNull',
    kind: 'object',
    interfaces: []
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString_0) {
    JsonPrimitive.call(this);
    this._isString = isString_0;
    this._content_2 = toString_1(body);
  }
  JsonLiteral.prototype._get_content__1 = function () {
    return this._content_2;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this._isString) {
      var tmp0_apply_0_1 = StringBuilder_init_$Create$_0();
      printQuoted(tmp0_apply_0_1, this._content_2);
      tmp = tmp0_apply_0_1.toString();
    } else {
      tmp = this._content_2;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression_0(this).equals(getKClassFromExpression_0(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this._isString === other._isString))
      return false;
    if (!(this._content_2 === other._content_2))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this._isString | 0;
    result = imul(31, result) + getStringHashCode(this._content_2) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = {
    simpleName: 'JsonLiteral',
    kind: 'class',
    interfaces: []
  };
  function _get_longOrNull_(_this_) {
    return toLongOrNull(_this_._get_content__1());
  }
  function _get_doubleOrNull_(_this_) {
    return toDoubleOrNull(_this_._get_content__1());
  }
  function _get_booleanOrNull_(_this_) {
    return toBooleanStrictOrNull(_this_._get_content__1());
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function _get_int_(_this_) {
    return toInt(_this_._get_content__1());
  }
  function _get_long_(_this_) {
    return toLong(_this_._get_content__1());
  }
  function _get_float_(_this_) {
    var tmp0_toFloat_0 = _this_._get_content__1();
    var tmp0_unsafeCast_0_1 = toDouble(tmp0_toFloat_0);
    return tmp0_unsafeCast_0_1;
  }
  function _get_double_(_this_) {
    return toDouble(_this_._get_content__1());
  }
  function _get_contentOrNull_(_this_) {
    var tmp;
    if (_this_ instanceof JsonNull) {
      tmp = null;
    } else {
      {
        tmp = _this_._get_content__1();
      }
    }
    return tmp;
  }
  function _get_jsonPrimitive_(_this_) {
    var tmp0_elvis_lhs = _this_ instanceof JsonPrimitive ? _this_ : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error_0(_this_, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error_0(_this_, element) {
    throw IllegalArgumentException_init_$Create$_0('' + 'Element ' + getKClassFromExpression_0(_this_) + ' is not a ' + element);
  }
  function _no_name_provided_$factory_44() {
    var i = new _no_name_provided__54();
    return function (p1) {
      return i.invoke_83(p1);
    };
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    var tmp = this;
    var tmp0_cast_0_1_1 = serializer_0(createKType_0(getKClass_0(HashMap), [createInvariantKTypeProjection_0(createKType_0(PrimitiveClasses_getInstance()._get_stringClass_(), [], false)), createInvariantKTypeProjection_0(createKType_0(getKClass_0(JsonElement), [], false))], false));
    tmp._$$delegate_0_0 = (isInterface(tmp0_cast_0_1_1, KSerializer) ? tmp0_cast_0_1_1 : THROW_CCE())._get_descriptor__57();
    this._serialName_7 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.getElementAnnotations_17 = function (index) {
    return this._$$delegate_0_0.getElementAnnotations_17(index);
  };
  JsonObjectDescriptor.prototype.getElementDescriptor_17 = function (index) {
    return this._$$delegate_0_0.getElementDescriptor_17(index);
  };
  JsonObjectDescriptor.prototype.getElementIndex_17 = function (name) {
    return this._$$delegate_0_0.getElementIndex_17(name);
  };
  JsonObjectDescriptor.prototype.getElementName_17 = function (index) {
    return this._$$delegate_0_0.getElementName_17(index);
  };
  JsonObjectDescriptor.prototype._get_elementsCount__17 = function () {
    return this._$$delegate_0_0._get_elementsCount__17();
  };
  JsonObjectDescriptor.prototype._get_isInline__17 = function () {
    return this._$$delegate_0_0._get_isInline__17();
  };
  JsonObjectDescriptor.prototype._get_isNullable__17 = function () {
    return this._$$delegate_0_0._get_isNullable__17();
  };
  JsonObjectDescriptor.prototype._get_kind__17 = function () {
    return this._$$delegate_0_0._get_kind__17();
  };
  JsonObjectDescriptor.prototype._get_serialName__17 = function () {
    return this._serialName_7;
  };
  JsonObjectDescriptor.$metadata$ = {
    simpleName: 'JsonObjectDescriptor',
    kind: 'object',
    interfaces: [SerialDescriptor]
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this._descriptor_26 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_26;
  };
  JsonObjectSerializer.prototype.serialize_64 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer_1(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).serialize_91(encoder, value);
  };
  JsonObjectSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_64(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.deserialize_61 = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer_1(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).deserialize_61(decoder));
  };
  JsonObjectSerializer.$metadata$ = {
    simpleName: 'JsonObjectSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function _no_name_provided__55() {
  }
  _no_name_provided__55.prototype.invoke_93 = function () {
    return JsonPrimitiveSerializer_getInstance()._descriptor_28;
  };
  _no_name_provided__55.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__56() {
  }
  _no_name_provided__56.prototype.invoke_93 = function () {
    return JsonNullSerializer_getInstance()._descriptor_29;
  };
  _no_name_provided__56.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__57() {
  }
  _no_name_provided__57.prototype.invoke_93 = function () {
    return JsonLiteralSerializer_getInstance()._descriptor_30;
  };
  _no_name_provided__57.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__58() {
  }
  _no_name_provided__58.prototype.invoke_93 = function () {
    return JsonObjectSerializer_getInstance()._descriptor_26;
  };
  _no_name_provided__58.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__59() {
  }
  _no_name_provided__59.prototype.invoke_93 = function () {
    return JsonArraySerializer_getInstance()._descriptor_31;
  };
  _no_name_provided__59.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__60() {
  }
  _no_name_provided__60.prototype.invoke_90 = function ($this$buildSerialDescriptor) {
    var tmp = defer(_no_name_provided_$factory_46());
    $this$buildSerialDescriptor.element$default('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(_no_name_provided_$factory_47());
    $this$buildSerialDescriptor.element$default('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(_no_name_provided_$factory_48());
    $this$buildSerialDescriptor.element$default('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(_no_name_provided_$factory_49());
    $this$buildSerialDescriptor.element$default('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(_no_name_provided_$factory_50());
    $this$buildSerialDescriptor.element$default('JsonArray', tmp_3, null, false, 12, null);
  };
  _no_name_provided__60.prototype.invoke_95 = function (p1) {
    this.invoke_90(p1 instanceof ClassSerialDescriptorBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__60.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    var tmp_1 = [];
    tmp._descriptor_27 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, tmp_1, _no_name_provided_$factory_45(), 4, null);
  }
  JsonElementSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_27;
  };
  JsonElementSerializer.prototype.serialize_66 = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive)
      encoder.encodeSerializableValue_1(JsonPrimitiveSerializer_getInstance(), value);
    else {
      if (tmp0_subject instanceof JsonObject)
        encoder.encodeSerializableValue_1(JsonObjectSerializer_getInstance(), value);
      else {
        if (tmp0_subject instanceof JsonArray)
          encoder.encodeSerializableValue_1(JsonArraySerializer_getInstance(), value);
        else {
        }
      }
    }
  };
  JsonElementSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_66(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.deserialize_61 = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.decodeJsonElement_4();
  };
  JsonElementSerializer.$metadata$ = {
    simpleName: 'JsonElementSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
    Unit_getInstance();
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
    Unit_getInstance();
  }
  function defer(deferred) {
    return new _no_name_provided__61(deferred);
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    var tmp_1 = [];
    tmp._descriptor_28 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, tmp_1, null, 12, null);
  }
  JsonPrimitiveSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_28;
  };
  JsonPrimitiveSerializer.prototype.serialize_68 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      tmp = encoder.encodeSerializableValue_1(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    } else {
      {
        var tmp_0 = JsonLiteralSerializer_getInstance();
        tmp = encoder.encodeSerializableValue_1(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      }
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_68(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.deserialize_61 = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_4();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, '' + 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression_0(result), toString_1(result));
    else {
    }
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = {
    simpleName: 'JsonPrimitiveSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    var tmp_1 = [];
    tmp._descriptor_29 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, tmp_1, null, 12, null);
  }
  JsonNullSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_29;
  };
  JsonNullSerializer.prototype.serialize_70 = function (encoder, value) {
    verify(encoder);
    encoder.encodeNull_1();
  };
  JsonNullSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_70(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.deserialize_61 = function (decoder) {
    verify_0(decoder);
    if (decoder.decodeNotNullMark_8()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }decoder.decodeNull_8();
    Unit_getInstance();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = {
    simpleName: 'JsonNullSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this._descriptor_30 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_30;
  };
  JsonLiteralSerializer.prototype.serialize_72 = function (encoder, value) {
    verify(encoder);
    if (value._isString) {
      return encoder.encodeString_1(value._content_2);
    }var tmp0_safe_receiver = _get_longOrNull_(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      return encoder.encodeLong_1(tmp0_safe_receiver);
    }
    Unit_getInstance();
    var tmp1_safe_receiver = toULongOrNull(value._content_2);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      {
        var tmp0_safe_receiver_2 = encoder.encodeInline_1(serializer_12(Companion_getInstance_5())._get_descriptor__57());
        if (tmp0_safe_receiver_2 == null)
          null;
        else {
          tmp0_safe_receiver_2.encodeLong_1(_ULong___get_data__impl_(tmp1_safe_receiver));
          Unit_getInstance();
        }
        Unit_getInstance();
        return Unit_getInstance();
      }
    }
    Unit_getInstance();
    var tmp2_safe_receiver = _get_doubleOrNull_(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      return encoder.encodeDouble_1(tmp2_safe_receiver);
    }
    Unit_getInstance();
    var tmp3_safe_receiver = _get_booleanOrNull_(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      return encoder.encodeBoolean_1(tmp3_safe_receiver);
    }
    Unit_getInstance();
    encoder.encodeString_1(value._content_2);
  };
  JsonLiteralSerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_72(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.deserialize_61 = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement_4();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, '' + 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression_0(result), toString_1(result));
    else {
    }
    return result;
  };
  JsonLiteralSerializer.$metadata$ = {
    simpleName: 'JsonLiteralSerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    var tmp = this;
    var tmp0_cast_0_1_1 = serializer_0(createKType_0(getKClass_0(List), [createInvariantKTypeProjection_0(createKType_0(getKClass_0(JsonElement), [], false))], false));
    tmp._$$delegate_0_1 = (isInterface(tmp0_cast_0_1_1, KSerializer) ? tmp0_cast_0_1_1 : THROW_CCE())._get_descriptor__57();
    this._serialName_8 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.getElementAnnotations_17 = function (index) {
    return this._$$delegate_0_1.getElementAnnotations_17(index);
  };
  JsonArrayDescriptor.prototype.getElementDescriptor_17 = function (index) {
    return this._$$delegate_0_1.getElementDescriptor_17(index);
  };
  JsonArrayDescriptor.prototype.getElementIndex_17 = function (name) {
    return this._$$delegate_0_1.getElementIndex_17(name);
  };
  JsonArrayDescriptor.prototype.getElementName_17 = function (index) {
    return this._$$delegate_0_1.getElementName_17(index);
  };
  JsonArrayDescriptor.prototype._get_elementsCount__17 = function () {
    return this._$$delegate_0_1._get_elementsCount__17();
  };
  JsonArrayDescriptor.prototype._get_isInline__17 = function () {
    return this._$$delegate_0_1._get_isInline__17();
  };
  JsonArrayDescriptor.prototype._get_isNullable__17 = function () {
    return this._$$delegate_0_1._get_isNullable__17();
  };
  JsonArrayDescriptor.prototype._get_kind__17 = function () {
    return this._$$delegate_0_1._get_kind__17();
  };
  JsonArrayDescriptor.prototype._get_serialName__17 = function () {
    return this._serialName_8;
  };
  JsonArrayDescriptor.$metadata$ = {
    simpleName: 'JsonArrayDescriptor',
    kind: 'object',
    interfaces: [SerialDescriptor]
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this._descriptor_31 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_31;
  };
  JsonArraySerializer.prototype.serialize_74 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).serialize_91(encoder, value);
  };
  JsonArraySerializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_74(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.deserialize_61 = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).deserialize_61(decoder));
  };
  JsonArraySerializer.$metadata$ = {
    simpleName: 'JsonArraySerializer',
    kind: 'object',
    interfaces: [KSerializer]
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function asJsonDecoder(_this_) {
    var tmp0_elvis_lhs = isInterface(_this_, JsonDecoder) ? _this_ : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('' + 'Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression_0(_this_)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function asJsonEncoder(_this_) {
    var tmp0_elvis_lhs = isInterface(_this_, JsonEncoder) ? _this_ : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('' + 'Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression_0(_this_)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original_($this) {
    var tmp0_getValue_0 = $this._original$delegate;
    var tmp1_getValue_0 = original$factory();
    return tmp0_getValue_0._get_value__14();
  }
  function _no_name_provided__61($deferred) {
    this._$deferred = $deferred;
    this._original$delegate = lazy(this._$deferred);
  }
  _no_name_provided__61.prototype._get_serialName__17 = function () {
    return _get_original_(this)._get_serialName__17();
  };
  _no_name_provided__61.prototype._get_kind__17 = function () {
    return _get_original_(this)._get_kind__17();
  };
  _no_name_provided__61.prototype._get_elementsCount__17 = function () {
    return _get_original_(this)._get_elementsCount__17();
  };
  _no_name_provided__61.prototype.getElementName_17 = function (index) {
    return _get_original_(this).getElementName_17(index);
  };
  _no_name_provided__61.prototype.getElementIndex_17 = function (name) {
    return _get_original_(this).getElementIndex_17(name);
  };
  _no_name_provided__61.prototype.getElementAnnotations_17 = function (index) {
    return _get_original_(this).getElementAnnotations_17(index);
  };
  _no_name_provided__61.prototype.getElementDescriptor_17 = function (index) {
    return _get_original_(this).getElementDescriptor_17(index);
  };
  _no_name_provided__61.$metadata$ = {
    kind: 'class',
    interfaces: [SerialDescriptor]
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original_(receiver);
    }, null);
  }
  function _no_name_provided_$factory_45() {
    var i = new _no_name_provided__60();
    return function (p1) {
      i.invoke_90(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_46() {
    var i = new _no_name_provided__55();
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_47() {
    var i = new _no_name_provided__56();
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_48() {
    var i = new _no_name_provided__57();
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_49() {
    var i = new _no_name_provided__58();
    return function () {
      return i.invoke_93();
    };
  }
  function _no_name_provided_$factory_50() {
    var i = new _no_name_provided__59();
    return function () {
      return i.invoke_93();
    };
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = {
    simpleName: 'JsonEncoder',
    kind: 'interface',
    interfaces: [Encoder, CompositeEncoder]
  };
  function JsonNames() {
  }
  JsonNames.$metadata$ = {
    simpleName: 'JsonNames',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Composer(sb, json) {
    this._sb = sb;
    this._json = json;
    this._level = 0;
    this._writingFirst = true;
  }
  Composer.prototype.indent_0 = function () {
    this._writingFirst = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this._level;
    tmp0_this._level = tmp1 + 1 | 0;
    Unit_getInstance();
  };
  Composer.prototype.unIndent_0 = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._level;
    tmp0_this._level = tmp1 - 1 | 0;
    Unit_getInstance();
  };
  Composer.prototype.nextItem_0 = function () {
    this._writingFirst = false;
    if (this._json._configuration._prettyPrint_0) {
      this.print_17('\n');
      var tmp0_repeat_0 = this._level;
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat_0)
        do {
          var index_2 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.print_17(this._json._configuration._prettyPrintIndent_0);
        }
         while (inductionVariable < tmp0_repeat_0);
    }};
  Composer.prototype.space_0 = function () {
    if (this._json._configuration._prettyPrint_0)
      this.print_16(new Char(32));
  };
  Composer.prototype.print_16 = function (v) {
    return this._sb.append_15(v);
  };
  Composer.prototype.print_17 = function (v) {
    return this._sb.append_16(v);
  };
  Composer.prototype.print_18 = function (v) {
    return this._sb.append_16(v.toString());
  };
  Composer.prototype.print_19 = function (v) {
    return this._sb.append_16(v.toString());
  };
  Composer.prototype.print_14 = function (v) {
    return this._sb.append_14(toLong_0(v));
  };
  Composer.prototype.print_15 = function (v) {
    return this._sb.append_14(toLong_0(v));
  };
  Composer.prototype.print_12 = function (v) {
    return this._sb.append_14(toLong_0(v));
  };
  Composer.prototype.print_13 = function (v) {
    return this._sb.append_14(v);
  };
  Composer.prototype.print_20 = function (v) {
    return this._sb.append_16(v.toString());
  };
  Composer.prototype.printQuoted_0 = function (value) {
    return this._sb.appendQuoted(value);
  };
  Composer.$metadata$ = {
    simpleName: 'Composer',
    kind: 'class',
    interfaces: []
  };
  function ComposerForUnsignedNumbers(sb, json) {
    Composer.call(this, sb, json);
  }
  ComposerForUnsignedNumbers.prototype.print_12 = function (v) {
    return Composer.prototype.print_17.call(this, UInt__toString_impl(_UInt___init__impl_(v)));
  };
  ComposerForUnsignedNumbers.prototype.print_13 = function (v) {
    return Composer.prototype.print_17.call(this, ULong__toString_impl(_ULong___init__impl_(v)));
  };
  ComposerForUnsignedNumbers.prototype.print_14 = function (v) {
    return Composer.prototype.print_17.call(this, UByte__toString_impl(_UByte___init__impl_(v)));
  };
  ComposerForUnsignedNumbers.prototype.print_15 = function (v) {
    return Composer.prototype.print_17.call(this, UShort__toString_impl(_UShort___init__impl_(v)));
  };
  ComposerForUnsignedNumbers.$metadata$ = {
    simpleName: 'ComposerForUnsignedNumbers',
    kind: 'class',
    interfaces: []
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  JsonDecodingException.$metadata$ = {
    simpleName: 'JsonDecodingException',
    kind: 'class',
    interfaces: []
  };
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, '' + message + '\nJSON input: ' + minify(input, offset));
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  JsonEncodingException.$metadata$ = {
    simpleName: 'JsonEncodingException',
    kind: 'class',
    interfaces: []
  };
  function InvalidFloatingPointEncoded(value, output_0) {
    var tmp = '' + 'Unexpected special floating-point value ' + value + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n";
    return new JsonEncodingException(tmp + ('' + 'Current output: ' + minify$default(output_0, 0, 1, null)));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException('' + "Value of type '" + keyDescriptor._get_serialName__17() + "' can't be used in JSON as a key in the map. " + ('' + "It should have either primitive or enum kind, but its kind is '" + keyDescriptor._get_kind__17() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function throwInvalidFloatingPointDecoded(_this_, result) {
    var tmp = '' + 'Unexpected special floating-point value ' + result + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    _this_.fail$default(tmp, 0, 2, null);
  }
  function InvalidFloatingPointDecoded(value, key, output_0) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output_0));
  }
  function UnknownKeyException(key, input) {
    var tmp = '' + "Encountered unknown key '" + key + "'.\n" + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.\n";
    return JsonDecodingException_1(-1, tmp + ('' + 'Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  JsonException.$metadata$ = {
    simpleName: 'JsonException',
    kind: 'class',
    interfaces: []
  };
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? '' + 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function minify(_this_, offset) {
    if (_this_.length < 200)
      return _this_;
    if (offset === -1) {
      var start = _this_.length - 60 | 0;
      if (start <= 0)
        return _this_;
      return '.....' + _this_.substring(start);
    }var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= _this_.length ? '' : '.....';
    var tmp0_substring_0 = coerceAtLeast(start_0, 0);
    var tmp1_substring_0 = coerceAtMost(end, _this_.length);
    return prefix + _this_.substring(tmp0_substring_0, tmp1_substring_0) + suffix;
  }
  function minify$default(_this_, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this_, offset);
  }
  function unexpectedFpErrorMessage(value, key, output_0) {
    var tmp = '' + 'Unexpected special floating-point value ' + value + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n";
    return tmp + ('' + 'Current output: ' + minify$default(output_0, 0, 1, null));
  }
  function isValidValueStart($this, c) {
    var tmp0_subject = c;
    return (((tmp0_subject.equals(new Char(125)) ? true : tmp0_subject.equals(new Char(93))) ? true : tmp0_subject.equals(new Char(58))) ? true : tmp0_subject.equals(new Char(44))) ? false : true;
  }
  function unexpectedToken($this, expected) {
    var tmp0_this = $this;
    tmp0_this._currentPosition = tmp0_this._currentPosition - 1 | 0;
    Unit_getInstance();
    if (expected.equals(new Char(34)) ? $this.consumeStringLenient() === 'null' : false) {
      $this.fail("Expected string literal but 'null' literal was found.\nUse 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.", $this._currentPosition - 4 | 0);
    }fail($this, charToTokenClass(expected));
  }
  function fail($this, expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "semicolon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = ($this._currentPosition === $this._source.length ? true : $this._currentPosition <= 0) ? 'EOF' : charSequenceGet($this._source, $this._currentPosition - 1 | 0).toString();
    $this.fail('' + 'Expected ' + expected + ", but had '" + s + "' instead", $this._currentPosition - 1 | 0);
  }
  function skipWhitespaces($this) {
    var current = $this._currentPosition;
    $l$break: while (current < $this._source.length) {
      var c = charSequenceGet($this._source, current);
      if (((c.equals(new Char(32)) ? true : c.equals(new Char(10))) ? true : c.equals(new Char(13))) ? true : c.equals(new Char(9))) {
        current = current + 1 | 0;
        Unit_getInstance();
      } else {
        break $l$break;
      }
    }
    $this._currentPosition = current;
    return current;
  }
  function consumeString($this, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var source = $this._source;
    var char = charSequenceGet(source, currentPosition);
    while (!char.equals(new Char(34))) {
      if (char.equals(new Char(92))) {
        currentPosition = appendEscape($this, lastPosition, currentPosition);
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= source.length) {
          $this.fail('EOF', currentPosition);
        } else {
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (lastPosition === startPosition) {
      var tmp0_substring_0 = lastPosition;
      var tmp1_substring_0 = currentPosition;
      tmp = source.substring(tmp0_substring_0, tmp1_substring_0);
    } else {
      tmp = decodedString($this, lastPosition, currentPosition);
    }
    var string = tmp;
    $this._currentPosition = currentPosition + 1 | 0;
    return string;
  }
  function appendEscape($this, lastPosition, current) {
    $this._escapedString.append_3($this._source, lastPosition, current);
    Unit_getInstance();
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    appendRange($this, lastPosition, currentPosition);
    var result = $this._escapedString.toString();
    $this._escapedString.setLength(0);
    return result;
  }
  function takePeeked($this) {
    var tmp0_also_0 = ensureNotNull($this._peekedString);
    $this._peekedString = null;
    return tmp0_also_0;
  }
  function appendRange($this, fromIndex, toIndex) {
    $this._escapedString.append_3($this._source, fromIndex, toIndex);
    Unit_getInstance();
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet($this._source, tmp0);
    if (currentChar.equals(new Char(117))) {
      return appendHex($this, $this._source, currentPosition);
    }var c = escapeToChar(currentChar.toInt_5());
    if (c.equals(new Char(0))) {
      var tmp = '' + "Invalid escaped char '" + currentChar + "'";
      $this.fail$default(tmp, 0, 2, null);
    }$this._escapedString.append_1(c);
    Unit_getInstance();
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= source.length) {
      $this.fail$default('Unexpected EOF during unicode escape', 0, 2, null);
    }$this._escapedString.append_1(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    Unit_getInstance();
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (new Char(48) <= character ? character <= new Char(57) : false) {
      tmp = character.toInt_5() - 48 | 0;
    } else if (new Char(97) <= character ? character <= new Char(102) : false) {
      tmp = (character.toInt_5() - 97 | 0) + 10 | 0;
    } else if (new Char(65) <= character ? character <= new Char(70) : false) {
      tmp = (character.toInt_5() - 65 | 0) + 10 | 0;
    } else {
      var tmp_0 = '' + "Invalid toHexChar char '" + character + "' in unicode escape";
      $this.fail$default(tmp_0, 0, 2, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = start;
    if (current === $this._source.length) {
      $this.fail$default('EOF', 0, 2, null);
    }var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp1_subject = charSequenceGet($this._source, tmp0).toInt_5() | 32;
    var tmp;
    switch (tmp1_subject) {
      case 116:
        consumeBooleanLiteral($this, 'rue', current);
        tmp = true;
        break;
      case 102:
        consumeBooleanLiteral($this, 'alse', current);
        tmp = false;
        break;
      default:var tmp_0 = '' + "Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient() + "'";
        $this.fail$default(tmp_0, 0, 2, null);
        break;
    }
    return tmp;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if (($this._source.length - current | 0) < literalSuffix.length) {
      $this.fail$default('Unexpected end of boolean literal', 0, 2, null);
    }var inductionVariable = 0;
    var last_0 = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this._source, current + i | 0);
        if (!(expected.toInt_5() === (actual.toInt_5() | 32))) {
          var tmp = '' + "Expected valid boolean literal prefix, but had '" + $this.consumeStringLenient() + "'";
          $this.fail$default(tmp, 0, 2, null);
        }}
       while (inductionVariable <= last_0);
    $this._currentPosition = current + literalSuffix.length | 0;
  }
  function JsonLexer(source) {
    this._source = source;
    this._currentPosition = 0;
    this._peekedString = null;
    this._escapedString = StringBuilder_init_$Create$_0();
  }
  JsonLexer.prototype.expectEof = function () {
    var nextToken = this.consumeNextToken_1();
    if (!(nextToken === 10)) {
      var tmp = '' + 'Expected EOF, but had ' + charSequenceGet(this._source, this._currentPosition - 1 | 0) + ' instead';
      this.fail$default(tmp, 0, 2, null);
    }};
  JsonLexer.prototype.tryConsumeComma = function () {
    var current = skipWhitespaces(this);
    if (current === this._source.length)
      return false;
    if (charSequenceGet(this._source, current).equals(new Char(44))) {
      var tmp0_this = this;
      tmp0_this._currentPosition = tmp0_this._currentPosition + 1 | 0;
      Unit_getInstance();
      return true;
    }return false;
  };
  JsonLexer.prototype.canConsumeValue = function () {
    var current = this._currentPosition;
    while (current < this._source.length) {
      var c = charSequenceGet(this._source, current);
      if (((c.equals(new Char(32)) ? true : c.equals(new Char(10))) ? true : c.equals(new Char(13))) ? true : c.equals(new Char(9))) {
        current = current + 1 | 0;
        Unit_getInstance();
        continue;
      }this._currentPosition = current;
      return isValidValueStart(this, c);
    }
    this._currentPosition = current;
    return false;
  };
  JsonLexer.prototype.consumeNextToken = function (expected) {
    var token = this.consumeNextToken_1();
    if (!(token === expected)) {
      fail(this, expected);
    }return token;
  };
  JsonLexer.prototype.consumeNextToken_0 = function (expected) {
    var source = this._source;
    while (this._currentPosition < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._currentPosition;
      tmp0_this._currentPosition = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c.equals(new Char(32)) ? true : c.equals(new Char(10))) ? true : c.equals(new Char(13))) ? true : c.equals(new Char(9)))
        continue;
      if (c.equals(expected))
        return Unit_getInstance();
      unexpectedToken(this, expected);
    }
    unexpectedToken(this, expected);
  };
  JsonLexer.prototype.peekNextToken = function () {
    var source = this._source;
    while (this._currentPosition < source.length) {
      var ch = charSequenceGet(source, this._currentPosition);
      if (((ch.equals(new Char(32)) ? true : ch.equals(new Char(10))) ? true : ch.equals(new Char(13))) ? true : ch.equals(new Char(9))) {
        var tmp0_this = this;
        tmp0_this._currentPosition = tmp0_this._currentPosition + 1 | 0;
        Unit_getInstance();
        continue;
      }return charToTokenClass(ch);
    }
    return 10;
  };
  JsonLexer.prototype.consumeNextToken_1 = function () {
    var source = this._source;
    while (this._currentPosition < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._currentPosition;
      tmp0_this._currentPosition = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === 3) {
        continue;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return 10;
  };
  JsonLexer.prototype.tryConsumeNotNull = function () {
    var current = skipWhitespaces(this);
    if ((this._source.length - current | 0) < 4)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!charSequenceGet('null', i).equals(charSequenceGet(this._source, current + i | 0)))
          return true;
      }
       while (inductionVariable <= 3);
    this._currentPosition = current + 4 | 0;
    return false;
  };
  JsonLexer.prototype.peekString = function (isLenient) {
    var token = this.peekNextToken();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.consumeStringLenient();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.consumeString();
    }
    var string = tmp;
    this._peekedString = string;
    return string;
  };
  JsonLexer.prototype.consumeKeyString = function () {
    this.consumeNextToken_0(new Char(34));
    var current = this._currentPosition;
    var tmp = new Char(34);
    var closingQuote = indexOf$default(this._source, tmp, current, false, 4, null);
    if (closingQuote === -1)
      fail(this, 1);
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this._source, i).equals(new Char(92))) {
          return consumeString(this, this._currentPosition, i);
        }}
       while (inductionVariable < closingQuote);
    this._currentPosition = closingQuote + 1 | 0;
    var tmp0_substring_0 = this._source;
    return tmp0_substring_0.substring(current, closingQuote);
  };
  JsonLexer.prototype.consumeString = function () {
    if (!(this._peekedString == null)) {
      return takePeeked(this);
    }return this.consumeKeyString();
  };
  JsonLexer.prototype.consumeStringLenient = function () {
    if (!(this._peekedString == null)) {
      return takePeeked(this);
    }var current = skipWhitespaces(this);
    if (current >= this._source.length) {
      this.fail('EOF', current);
    }var token = charToTokenClass(charSequenceGet(this._source, current));
    if (token === 1) {
      return this.consumeString();
    }if (!(token === 0)) {
      var tmp = '' + 'Expected beginning of the string, but got ' + charSequenceGet(this._source, current);
      this.fail$default(tmp, 0, 2, null);
    }while (current < this._source.length ? charToTokenClass(charSequenceGet(this._source, current)) === 0 : false) {
      current = current + 1 | 0;
      Unit_getInstance();
    }
    var tmp0_substring_0 = this._source;
    var tmp1_substring_0 = this._currentPosition;
    var tmp2_substring_0 = current;
    var result = tmp0_substring_0.substring(tmp1_substring_0, tmp2_substring_0);
    this._currentPosition = current;
    return result;
  };
  JsonLexer.prototype.skipElement = function (allowLenientStrings) {
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.peekNextToken();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.consumeStringLenient();
      Unit_getInstance();
      return Unit_getInstance();
    }while (true) {
      lastToken = this.peekNextToken();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.consumeStringLenient();
          Unit_getInstance();
        } else {
          this.consumeKeyString();
          Unit_getInstance();
        }
        continue;
      }var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.add_16(lastToken);
        Unit_getInstance();
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this._currentPosition, 'found ] instead of }', this._source);
        removeLast(tokenStack);
        Unit_getInstance();
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this._currentPosition, 'found } instead of ]', this._source);
        removeLast(tokenStack);
        Unit_getInstance();
      } else if (tmp0_subject === 10) {
        this.fail$default('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, 2, null);
      }this.consumeNextToken_1();
      Unit_getInstance();
      if (tokenStack._get_size__28() === 0)
        return Unit_getInstance();
    }
  };
  JsonLexer.prototype.toString = function () {
    return '' + "JsonReader(source='" + this._source + "', currentPosition=" + this._currentPosition + ')';
  };
  JsonLexer.prototype.failOnUnknownKey = function (key) {
    var tmp0_substring_0 = this._source;
    var tmp1_substring_0 = 0;
    var tmp2_substring_0 = this._currentPosition;
    var processed = tmp0_substring_0.substring(tmp1_substring_0, tmp2_substring_0);
    var lastIndexOf_0 = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.fail('' + "Encountered an unknown key '" + key + "'.\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.", lastIndexOf_0);
  };
  JsonLexer.prototype.fail = function (message, position) {
    throw JsonDecodingException_0(position, message, this._source);
  };
  JsonLexer.prototype.fail$default = function (message, position, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this._currentPosition;
    return this.fail(message, position);
  };
  JsonLexer.prototype.consumeNumericLiteral = function () {
    var current = skipWhitespaces(this);
    if (current === this._source.length) {
      this.fail$default('EOF', 0, 2, null);
    }var tmp;
    if (charSequenceGet(this._source, current).equals(new Char(34))) {
      current = current + 1 | 0;
      if (current === this._source.length) {
        this.fail$default('EOF', 0, 2, null);
      } else {
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative_0 = false;
    var start = current;
    var hasChars = true;
    $l$break: while (hasChars) {
      var ch = charSequenceGet(this._source, current);
      if (ch.equals(new Char(45))) {
        if (!(current === start)) {
          this.fail$default("Unexpected symbol '-' in numeric literal", 0, 2, null);
        }isNegative_0 = true;
        current = current + 1 | 0;
        Unit_getInstance();
        continue $l$break;
      }var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$break;
      current = current + 1 | 0;
      Unit_getInstance();
      hasChars = !(current === this._source.length);
      var digit = ch.minus(new Char(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = '' + "Unexpected symbol '" + ch + "' in numeric literal";
        this.fail$default(tmp_0, 0, 2, null);
      }var tmp0_times_0 = accumulator;
      var tmp1_times_0 = 10;
      var tmp2_minus_0 = tmp0_times_0.times_27(toLong_0(tmp1_times_0));
      accumulator = tmp2_minus_0.minus_28(toLong_0(digit));
      if (accumulator.compareTo_45(new Long(0, 0)) > 0) {
        this.fail$default('Numeric value overflow', 0, 2, null);
      }}
    if (start === current ? true : isNegative_0 ? start === (current - 1 | 0) : false) {
      this.fail$default('Expected numeric literal', 0, 2, null);
    }if (hasQuotation) {
      if (!hasChars) {
        this.fail$default('EOF', 0, 2, null);
      }if (!charSequenceGet(this._source, current).equals(new Char(34))) {
        this.fail$default('Expected closing quotation mark', 0, 2, null);
      }current = current + 1 | 0;
      Unit_getInstance();
    }this._currentPosition = current;
    var tmp_1;
    if (isNegative_0) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_11();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.unaryMinus_4();
      } else {
        {
          this.fail$default('Numeric value overflow', 0, 2, null);
        }
      }
    }
    return tmp_1;
  };
  JsonLexer.prototype.consumeBoolean = function () {
    return consumeBoolean(this, skipWhitespaces(this));
  };
  JsonLexer.prototype.consumeBooleanLenient = function () {
    var current = skipWhitespaces(this);
    if (current === this._source.length) {
      this.fail$default('EOF', 0, 2, null);
    }var tmp;
    if (charSequenceGet(this._source, current).equals(new Char(34))) {
      current = current + 1 | 0;
      Unit_getInstance();
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this._currentPosition === this._source.length) {
        this.fail$default('EOF', 0, 2, null);
      }if (!charSequenceGet(this._source, this._currentPosition).equals(new Char(34))) {
        this.fail$default('Expected closing quotation mark', 0, 2, null);
      }var tmp0_this = this;
      tmp0_this._currentPosition = tmp0_this._currentPosition + 1 | 0;
      Unit_getInstance();
    }return result;
  };
  JsonLexer.$metadata$ = {
    simpleName: 'JsonLexer',
    kind: 'class',
    interfaces: []
  };
  function charToTokenClass(c) {
    return c.toInt_5() < 126 ? CharMappings_getInstance()._CHAR_TO_TOKEN[c.toInt_5()] : 0;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance()._ESCAPE_2_CHAR[c] : new Char(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, new Char(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, new Char(98));
    initC2ESC($this, 9, new Char(116));
    initC2ESC($this, 10, new Char(110));
    initC2ESC($this, 12, new Char(102));
    initC2ESC($this, 13, new Char(114));
    initC2ESC_0($this, new Char(47), new Char(47));
    initC2ESC_0($this, new Char(34), new Char(34));
    initC2ESC_0($this, new Char(92), new Char(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, new Char(44), 4);
    initC2TC_0($this, new Char(58), 5);
    initC2TC_0($this, new Char(123), 6);
    initC2TC_0($this, new Char(125), 7);
    initC2TC_0($this, new Char(91), 8);
    initC2TC_0($this, new Char(93), 9);
    initC2TC_0($this, new Char(34), 1);
    initC2TC_0($this, new Char(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!esc.equals(new Char(117)))
      $this._ESCAPE_2_CHAR[esc.toInt_5()] = numberToChar(c);
  }
  function initC2ESC_0($this, c, esc) {
    return initC2ESC($this, c.toInt_5(), esc);
  }
  function initC2TC($this, c, cl) {
    $this._CHAR_TO_TOKEN[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    return initC2TC($this, c.toInt_5(), cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this._ESCAPE_2_CHAR = charArray(117);
    this._CHAR_TO_TOKEN = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  CharMappings.$metadata$ = {
    simpleName: 'CharMappings',
    kind: 'object',
    interfaces: []
  };
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  var JsonAlternativeNamesKey;
  function getJsonNameIndex(_this_, json, name) {
    var index = _this_.getElementIndex_17(name);
    Companion_getInstance_12();
    if (!(index === -3))
      return index;
    else {
    }
    if (!json._configuration._useAlternativeNames_0)
      return index;
    var alternativeNamesMap = json._schemaCache.getOrPut(_this_, JsonAlternativeNamesKey, _no_name_provided_$factory_51(_this_));
    var tmp0_elvis_lhs = alternativeNamesMap.get_16(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_12();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function getJsonNameIndexOrThrow(_this_, json, name) {
    var index = getJsonNameIndex(_this_, json, name);
    Companion_getInstance_12();
    if (index === -3)
      throw SerializationException_init_$Create$('' + _this_._get_serialName__17() + " does not contain element with name '" + name + "'");
    else {
    }
    return index;
  }
  function buildAlternativeNamesMap(_this_) {
    var builder = null;
    var inductionVariable = 0;
    var last_0 = _this_._get_elementsCount__17();
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_filterIsInstance_0 = _this_.getElementAnnotations_17(i);
        var tmp0_filterIsInstanceTo_0_1 = ArrayList_init_$Create$();
        var tmp0_iterator_1_2 = tmp0_filterIsInstance_0.iterator_38();
        while (tmp0_iterator_1_2.hasNext_13()) {
          var element_2_3 = tmp0_iterator_1_2.next_13();
          if (element_2_3 instanceof JsonNames) {
            tmp0_filterIsInstanceTo_0_1.add_16(element_2_3);
            Unit_getInstance();
          } else {
          }
        }
        var tmp1_safe_receiver = singleOrNull(tmp0_filterIsInstanceTo_0_1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._names_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          var tmp0_iterator_1 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_1.hasNext_13()) {
            var element_2 = tmp0_iterator_1.next_13();
            if (builder == null)
              builder = createMapForCache(_this_._get_elementsCount__17());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this_, element_2, i);
          }
          Unit_getInstance();
        }
        Unit_getInstance();
      }
       while (inductionVariable < last_0);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this_, $this_buildAlternativeNamesMap, name, index) {
    if ((isInterface(_this_, Map_0) ? _this_ : THROW_CCE()).containsKey_8(name)) {
      throw new JsonException('' + "The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.getElementName_17(index) + ' is already one of the names for property ' + ('' + $this_buildAlternativeNamesMap.getElementName_17(getValue(_this_, name)) + ' in ' + $this_buildAlternativeNamesMap));
    } else {
    }
    _this_.put_4(name, index);
    Unit_getInstance();
  }
  function _no_name_provided__62($boundThis) {
    this._$boundThis = $boundThis;
  }
  _no_name_provided__62.prototype.invoke_93 = function () {
    return buildAlternativeNamesMap(this._$boundThis);
  };
  _no_name_provided__62.prototype._get_name__1 = function () {
    return 'buildAlternativeNamesMap';
  };
  _no_name_provided__62.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_51($boundThis) {
    var i = new _no_name_provided__62($boundThis);
    var l = function () {
      return i.invoke_93();
    };
    l.callableName = i._get_name__1();
    return l;
  }
  function readObject($this) {
    var lastToken = $this._lexer.consumeNextToken(6);
    if ($this._lexer.peekNextToken() === 4) {
      $this._lexer.fail$default('Unexpected leading comma', 0, 2, null);
    }var result = LinkedHashMap_init_$Create$();
    while ($this._lexer.canConsumeValue()) {
      var key = $this._isLenient_1 ? $this._lexer.consumeStringLenient() : $this._lexer.consumeString();
      $this._lexer.consumeNextToken(5);
      Unit_getInstance();
      var element = $this.read();
      result.put_4(key, element);
      Unit_getInstance();
      lastToken = $this._lexer.consumeNextToken_1();
      if (!(lastToken === 4) ? !(lastToken === 7) : false) {
        $this._lexer.fail$default('Expected end of the object or comma', 0, 2, null);
      }}
    if (lastToken === 6) {
      $this._lexer.consumeNextToken(7);
      Unit_getInstance();
    } else if (lastToken === 4) {
      $this._lexer.fail$default('Unexpected trailing comma', 0, 2, null);
    }return new JsonObject(result);
  }
  function readArray($this) {
    var lastToken = $this._lexer.consumeNextToken_1();
    if ($this._lexer.peekNextToken() === 4) {
      $this._lexer.fail$default('Unexpected leading comma', 0, 2, null);
    }var result = ArrayList_init_$Create$();
    while ($this._lexer.canConsumeValue()) {
      var element = $this.read();
      result.add_16(element);
      Unit_getInstance();
      lastToken = $this._lexer.consumeNextToken_1();
      if (!(lastToken === 4)) {
        var tmp0_require_0 = $this._lexer;
        var tmp1_require_0 = lastToken === 9;
        var tmp2_require_0 = tmp0_require_0._currentPosition;
        if (!tmp1_require_0) {
          tmp0_require_0.fail('Expected end of the array or comma', tmp2_require_0);
        }}}
    if (lastToken === 8) {
      $this._lexer.consumeNextToken(9);
      Unit_getInstance();
    } else if (lastToken === 4) {
      $this._lexer.fail$default('Unexpected trailing comma', 0, 2, null);
    }return new JsonArray(result);
  }
  function readValue($this, isString_0) {
    var tmp;
    if ($this._isLenient_1 ? true : !isString_0) {
      tmp = $this._lexer.consumeStringLenient();
    } else {
      tmp = $this._lexer.consumeString();
    }
    var string = tmp;
    if (!isString_0 ? string === 'null' : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString_0);
  }
  function JsonTreeReader(configuration, lexer) {
    this._lexer = lexer;
    this._isLenient_1 = configuration._isLenient_0;
  }
  JsonTreeReader.prototype.read = function () {
    var tmp0_subject = this._lexer.peekNextToken();
    var tmp;
    if (tmp0_subject === 1) {
      tmp = readValue(this, true);
    } else if (tmp0_subject === 0) {
      tmp = readValue(this, false);
    } else if (tmp0_subject === 6) {
      tmp = readObject(this);
    } else if (tmp0_subject === 8) {
      tmp = readArray(this);
    } else {
      this._lexer.fail$default("Can't begin reading element, unexpected token", 0, 2, null);
    }
    return tmp;
  };
  JsonTreeReader.$metadata$ = {
    simpleName: 'JsonTreeReader',
    kind: 'class',
    interfaces: []
  };
  function decodeSerializableValuePolymorphic(_this_, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      {
        tmp = _this_._get_json__6()._configuration._useArrayPolymorphism_0;
      }
    }
    if (tmp) {
      return deserializer.deserialize_61(_this_);
    } else {
    }
    var tmp0_cast_0 = _this_.decodeJsonElement_4();
    var tmp1_cast_0 = deserializer._get_descriptor__57();
    if (!(tmp0_cast_0 instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, '' + 'Expected ' + getKClass_0(JsonObject) + ' as the serialized body of ' + tmp1_cast_0._get_serialName__17() + ', but had ' + getKClassFromExpression_0(tmp0_cast_0));
    } else {
    }
    var jsonTree = tmp0_cast_0;
    var discriminator = _this_._get_json__6()._configuration._classDiscriminator_0;
    var tmp0_safe_receiver = jsonTree.get_15(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : _get_jsonPrimitive_(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._get_content__1();
    var tmp2_elvis_lhs = deserializer.findPolymorphicSerializerOrNull_1(_this_, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this_._get_json__6();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function findActualSerializer(_this_, serializer_15, value) {
    var casted = serializer_15 instanceof AbstractPolymorphicSerializer ? serializer_15 : THROW_CCE();
    var actualSerializer = findPolymorphicSerializer(casted, _this_, isObject(value) ? value : THROW_CCE());
    validateIfSealed(casted, actualSerializer, _this_._get_json__6()._configuration._classDiscriminator_0);
    var kind = actualSerializer._get_descriptor__57()._get_kind__17();
    checkKind(kind);
    return actualSerializer;
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : '' + "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, '' + 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer_15, actualSerializer, classDiscriminator) {
    if (!(serializer_15 instanceof SealedClassSerializer))
      return Unit_getInstance();
    else {
    }
    if (jsonCachedSerialNames(actualSerializer._get_descriptor__57()).contains_26(classDiscriminator)) {
      var baseName = serializer_15._get_descriptor__57()._get_serialName__17();
      var actualName = actualSerializer._get_descriptor__57()._get_serialName__17();
      var tmp0_error_0 = '' + "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + ('' + " it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    }}
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      var tmp0_error_0 = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    } else {
    }
    if (kind instanceof PrimitiveKind) {
      var tmp1_error_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
    } else {
    }
    if (kind instanceof PolymorphicKind) {
      var tmp2_error_0 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString_1(tmp2_error_0));
    } else {
    }
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor._get_kind__17();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      {
        tmp = equals_1(kind, CONTEXTUAL_getInstance());
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Serializer for ' + actualClass._get_simpleName__4() + " can't be registered as a subclass for polymorphic serialization " + ('' + 'because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    } else {
    }
    if ($this._useArrayPolymorphism_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals_1(kind, LIST_getInstance()) ? true : equals_1(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      {
        tmp_0 = kind instanceof ENUM;
      }
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Serializer for ' + actualClass._get_simpleName__4() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    } else {
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last_0 = descriptor._get_elementsCount__17();
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.getElementName_17(i);
        if (name === $this._discriminator) {
          throw IllegalArgumentException_init_$Create$_0('' + 'Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }}
       while (inductionVariable < last_0);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this._useArrayPolymorphism_1 = useArrayPolymorphism;
    this._discriminator = discriminator;
  }
  PolymorphismValidator.prototype.contextual_1 = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.polymorphic_0 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer._get_descriptor__57();
    checkKind_0(this, descriptor, actualClass);
    if (!this._useArrayPolymorphism_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }};
  PolymorphismValidator.prototype.polymorphicDefault_0 = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.$metadata$ = {
    simpleName: 'PolymorphismValidator',
    kind: 'class',
    interfaces: [SerializersModuleCollector]
  };
  function Key() {
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'class',
    interfaces: []
  };
  function DescriptorSchemaCache() {
    this._map_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.set = function (descriptor, key, value) {
    var tmp0_getOrPut_0 = this._map_1;
    var value_1 = tmp0_getOrPut_0.get_16(descriptor);
    var tmp;
    if (value_1 == null) {
      var answer_2 = createMapForCache(1);
      tmp0_getOrPut_0.put_4(descriptor, answer_2);
      Unit_getInstance();
      tmp = answer_2;
    } else {
      tmp = value_1;
    }
    var tmp1_set_0 = tmp;
    var tmp2_set_0 = key instanceof Key ? key : THROW_CCE();
    var tmp3_set_0 = isObject(value) ? value : THROW_CCE();
    tmp1_set_0.put_4(tmp2_set_0, tmp3_set_0);
    Unit_getInstance();
  };
  DescriptorSchemaCache.prototype.getOrPut = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.get_18(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      return tmp0_safe_receiver;
    }
    Unit_getInstance();
    var value = defaultValue();
    this.set(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.get_18 = function (descriptor, key) {
    var tmp0_safe_receiver = this._map_1.get_16(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.get_16(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  DescriptorSchemaCache.$metadata$ = {
    simpleName: 'DescriptorSchemaCache',
    kind: 'class',
    interfaces: []
  };
  function checkLeadingComma($this) {
    if ($this._lexer_0.peekNextToken() === 4) {
      $this._lexer_0.fail$default('Unexpected leading comma', 0, 2, null);
    }}
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !($this._currentIndex % 2 === 0);
    if (decodingKey) {
      if (!($this._currentIndex === -1)) {
        hasComma = $this._lexer_0.tryConsumeComma();
      }} else {
      $this._lexer_0.consumeNextToken_0(new Char(58));
    }
    var tmp;
    if ($this._lexer_0.canConsumeValue()) {
      if (decodingKey) {
        if ($this._currentIndex === -1) {
          var tmp0_require_0 = $this._lexer_0;
          var tmp1_require_0 = !hasComma;
          var tmp2_require_0 = tmp0_require_0._currentPosition;
          if (!tmp1_require_0) {
            tmp0_require_0.fail('Unexpected trailing comma', tmp2_require_0);
          }} else {
          var tmp3_require_0 = $this._lexer_0;
          var tmp4_require_0 = hasComma;
          var tmp5_require_0 = tmp3_require_0._currentPosition;
          if (!tmp4_require_0) {
            tmp3_require_0.fail('Expected comma after the key-value pair', tmp5_require_0);
          }}
      }var tmp0_this = $this;
      tmp0_this._currentIndex = tmp0_this._currentIndex + 1 | 0;
      tmp = tmp0_this._currentIndex;
    } else {
      if (hasComma) {
        $this._lexer_0.fail$default("Expected '}', but had ',' instead", 0, 2, null);
      }Companion_getInstance_12();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var elementDescriptor = descriptor.getElementDescriptor_17(index);
    if (!elementDescriptor._get_isNullable__17() ? !$this._lexer_0.tryConsumeNotNull() : false)
      return true;
    if (equals_1(elementDescriptor._get_kind__17(), ENUM_getInstance())) {
      var tmp0_elvis_lhs = $this._lexer_0.peekString($this._configuration_0._isLenient_0);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var enumValue = tmp;
      var enumIndex = getJsonNameIndex(elementDescriptor, $this._json_0, enumValue);
      Companion_getInstance_12();
      if (enumIndex === -3) {
        $this._lexer_0.consumeString();
        Unit_getInstance();
        return true;
      } else {
      }
    }return false;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this._lexer_0.tryConsumeComma();
    while ($this._lexer_0.canConsumeValue()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this._lexer_0.consumeNextToken_0(new Char(58));
      var index = getJsonNameIndex(descriptor, $this._json_0, key);
      var tmp;
      Companion_getInstance_12();
      if (!(index === -3)) {
        var tmp_0;
        if ($this._configuration_0._coerceInputValues_0 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this._lexer_0.tryConsumeComma();
          tmp_0 = false;
        } else {
          return index;
        }
        tmp = tmp_0;
      } else {
        {
          tmp = true;
        }
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }}
    if (hasComma) {
      $this._lexer_0.fail$default('Unexpected trailing comma', 0, 2, null);
    }Companion_getInstance_12();
    return -1;
  }
  function handleUnknown($this, key) {
    if ($this._configuration_0._ignoreUnknownKeys_0) {
      $this._lexer_0.skipElement($this._configuration_0._isLenient_0);
    } else {
      $this._lexer_0.failOnUnknownKey(key);
    }
    return $this._lexer_0.tryConsumeComma();
  }
  function decodeListIndex($this) {
    var hasComma = $this._lexer_0.tryConsumeComma();
    var tmp;
    if ($this._lexer_0.canConsumeValue()) {
      if (!($this._currentIndex === -1) ? !hasComma : false) {
        $this._lexer_0.fail$default('Expected end of the array or comma', 0, 2, null);
      }var tmp0_this = $this;
      tmp0_this._currentIndex = tmp0_this._currentIndex + 1 | 0;
      tmp = tmp0_this._currentIndex;
    } else {
      if (hasComma) {
        $this._lexer_0.fail$default('Unexpected trailing comma', 0, 2, null);
      }Companion_getInstance_12();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this._configuration_0._isLenient_0) {
      tmp = $this._lexer_0.consumeStringLenient();
    } else {
      tmp = $this._lexer_0.consumeKeyString();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer) {
    AbstractDecoder.call(this);
    this._json_0 = json;
    this._mode = mode;
    this._lexer_0 = lexer;
    this._serializersModule_1 = this._json_0._get_serializersModule__15();
    this._currentIndex = -1;
    this._configuration_0 = this._json_0._configuration;
  }
  StreamingJsonDecoder.prototype._get_json__6 = function () {
    return this._json_0;
  };
  StreamingJsonDecoder.prototype._get_serializersModule__15 = function () {
    return this._serializersModule_1;
  };
  StreamingJsonDecoder.prototype.decodeJsonElement_4 = function () {
    return (new JsonTreeReader(this._json_0._configuration, this._lexer_0)).read();
  };
  StreamingJsonDecoder.prototype.decodeSerializableValue_16 = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  StreamingJsonDecoder.prototype.beginStructure_11 = function (descriptor) {
    var newMode = switchMode(this._json_0, descriptor);
    this._lexer_0.consumeNextToken_0(newMode._begin);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp;
    if ((tmp0_subject.equals(WriteMode_LIST_getInstance()) ? true : tmp0_subject.equals(WriteMode_MAP_getInstance())) ? true : tmp0_subject.equals(WriteMode_POLY_OBJ_getInstance())) {
      tmp = new StreamingJsonDecoder(this._json_0, newMode, this._lexer_0);
    } else {
      var tmp_0;
      if (this._mode.equals(newMode)) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this._json_0, newMode, this._lexer_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.endStructure_11 = function (descriptor) {
    this._lexer_0.consumeNextToken_0(this._mode._end);
  };
  StreamingJsonDecoder.prototype.decodeNotNullMark_8 = function () {
    return this._lexer_0.tryConsumeNotNull();
  };
  StreamingJsonDecoder.prototype.decodeNull_8 = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.decodeElementIndex_8 = function (descriptor) {
    var tmp0_subject = this._mode;
    return tmp0_subject.equals(WriteMode_OBJ_getInstance()) ? decodeObjectIndex(this, descriptor) : tmp0_subject.equals(WriteMode_MAP_getInstance()) ? decodeMapIndex(this) : decodeListIndex(this);
  };
  StreamingJsonDecoder.prototype.decodeBoolean_8 = function () {
    var tmp;
    if (this._configuration_0._isLenient_0) {
      tmp = this._lexer_0.consumeBooleanLenient();
    } else {
      tmp = this._lexer_0.consumeBoolean();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeByte_8 = function () {
    var value = this._lexer_0.consumeNumericLiteral();
    if (!value.equals(toLong_0(value.toByte_4()))) {
      var tmp = '' + "Failed to parse byte for input '" + value + "'";
      this._lexer_0.fail$default(tmp, 0, 2, null);
    }return value.toByte_4();
  };
  StreamingJsonDecoder.prototype.decodeShort_8 = function () {
    var value = this._lexer_0.consumeNumericLiteral();
    if (!value.equals(toLong_0(value.toShort_4()))) {
      var tmp = '' + "Failed to parse short for input '" + value + "'";
      this._lexer_0.fail$default(tmp, 0, 2, null);
    }return value.toShort_4();
  };
  StreamingJsonDecoder.prototype.decodeInt_8 = function () {
    var value = this._lexer_0.consumeNumericLiteral();
    if (!value.equals(toLong_0(value.toInt_5()))) {
      var tmp = '' + "Failed to parse int for input '" + value + "'";
      this._lexer_0.fail$default(tmp, 0, 2, null);
    }return value.toInt_5();
  };
  StreamingJsonDecoder.prototype.decodeLong_8 = function () {
    return this._lexer_0.consumeNumericLiteral();
  };
  StreamingJsonDecoder.prototype.decodeFloat_8 = function () {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_parseString_0 = this._lexer_0;
      var tmp1_parseString_0 = 'float';
      var input_1 = tmp0_parseString_0.consumeStringLenient();
      try {
        var tmp0_unsafeCast_0_1_4 = toDouble(input_1);
        tmp$ret$0 = tmp0_unsafeCast_0_1_4;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = '' + "Failed to parse type '" + tmp1_parseString_0 + "' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    var result = tmp$ret$0;
    var specialFp = this._json_0._configuration._allowSpecialFloatingPointValues_0;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this._lexer_0, result);
  };
  StreamingJsonDecoder.prototype.decodeDouble_8 = function () {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_parseString_0 = this._lexer_0;
      var tmp1_parseString_0 = 'double';
      var input_1 = tmp0_parseString_0.consumeStringLenient();
      try {
        tmp$ret$0 = toDouble(input_1);
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = '' + "Failed to parse type '" + tmp1_parseString_0 + "' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    var result = tmp$ret$0;
    var specialFp = this._json_0._configuration._allowSpecialFloatingPointValues_0;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this._lexer_0, result);
  };
  StreamingJsonDecoder.prototype.decodeChar_8 = function () {
    var string = this._lexer_0.consumeStringLenient();
    if (!(string.length === 1)) {
      var tmp = '' + "Expected single char, but got '" + string + "'";
      this._lexer_0.fail$default(tmp, 0, 2, null);
    }return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.decodeString_8 = function () {
    var tmp;
    if (this._configuration_0._isLenient_0) {
      tmp = this._lexer_0.consumeStringLenient();
    } else {
      tmp = this._lexer_0.consumeString();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.decodeInline_8 = function (inlineDescriptor) {
    return _get_isUnsignedNumber_(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(this._lexer_0, this._json_0) : AbstractDecoder.prototype.decodeInline_8.call(this, inlineDescriptor);
  };
  StreamingJsonDecoder.prototype.decodeEnum_8 = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this._json_0, this.decodeString_8());
  };
  StreamingJsonDecoder.$metadata$ = {
    simpleName: 'StreamingJsonDecoder',
    kind: 'class',
    interfaces: [JsonDecoder]
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this._lexer_1 = lexer;
    this._serializersModule_2 = json._get_serializersModule__15();
  }
  JsonDecoderForUnsignedTypes.prototype._get_serializersModule__15 = function () {
    return this._serializersModule_2;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeElementIndex_8 = function (descriptor) {
    var tmp0_error_0 = 'unsupported';
    throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
  };
  JsonDecoderForUnsignedTypes.prototype.decodeInt_8 = function () {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_parseString_0 = this._lexer_1;
      var tmp1_parseString_0 = 'UInt';
      var input_1 = tmp0_parseString_0.consumeStringLenient();
      try {
        var tmp0_toInt_0_4 = toUInt(input_1);
        tmp$ret$0 = _UInt___get_data__impl_(tmp0_toInt_0_4);
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = '' + "Failed to parse type '" + tmp1_parseString_0 + "' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeLong_8 = function () {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_parseString_0 = this._lexer_1;
      var tmp1_parseString_0 = 'ULong';
      var input_1 = tmp0_parseString_0.consumeStringLenient();
      try {
        var tmp0_toLong_0_4 = toULong(input_1);
        tmp$ret$0 = _ULong___get_data__impl_(tmp0_toLong_0_4);
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = '' + "Failed to parse type '" + tmp1_parseString_0 + "' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeByte_8 = function () {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_parseString_0 = this._lexer_1;
      var tmp1_parseString_0 = 'UByte';
      var input_1 = tmp0_parseString_0.consumeStringLenient();
      try {
        var tmp0_toByte_0_4 = toUByte(input_1);
        tmp$ret$0 = _UByte___get_data__impl_(tmp0_toByte_0_4);
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = '' + "Failed to parse type '" + tmp1_parseString_0 + "' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  JsonDecoderForUnsignedTypes.prototype.decodeShort_8 = function () {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_parseString_0 = this._lexer_1;
      var tmp1_parseString_0 = 'UShort';
      var input_1 = tmp0_parseString_0.consumeStringLenient();
      try {
        var tmp0_toShort_0_4 = toUShort(input_1);
        tmp$ret$0 = _UShort___get_data__impl_(tmp0_toShort_0_4);
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = '' + "Failed to parse type '" + tmp1_parseString_0 + "' for input '" + input_1 + "'";
          tmp0_parseString_0.fail$default(tmp, 0, 2, null);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  JsonDecoderForUnsignedTypes.$metadata$ = {
    simpleName: 'JsonDecoderForUnsignedTypes',
    kind: 'class',
    interfaces: []
  };
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output_0, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, new Composer(output_0, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output_0, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output_0, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this._composer.nextItem_0();
    $this.encodeString_1($this._configuration_1._classDiscriminator_0);
    $this._composer.print_16(new Char(58));
    $this._composer.space_0();
    $this.encodeString_1(descriptor._get_serialName__17());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this._composer = composer;
    this._json_1 = json;
    this._mode_0 = mode;
    this._modeReuseCache = modeReuseCache;
    this._serializersModule_3 = this._json_1._get_serializersModule__15();
    this._configuration_1 = this._json_1._configuration;
    this._forceQuoting = false;
    this._writePolymorphic = false;
    var i = this._mode_0._get_ordinal__0();
    if (!(this._modeReuseCache == null)) {
      if (!(this._modeReuseCache[i] === null) ? true : !(this._modeReuseCache[i] === this))
        this._modeReuseCache[i] = this;
    }}
  StreamingJsonEncoder.prototype._get_json__6 = function () {
    return this._json_1;
  };
  StreamingJsonEncoder.prototype._get_serializersModule__15 = function () {
    return this._serializersModule_3;
  };
  StreamingJsonEncoder.prototype.shouldEncodeElementDefault_1 = function (descriptor, index) {
    return this._configuration_1._encodeDefaults_0;
  };
  StreamingJsonEncoder.prototype.encodeSerializableValue_1 = function (serializer_15, value) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (!(serializer_15 instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        {
          tmp = this._get_json__6()._configuration._useArrayPolymorphism_0;
        }
      }
      if (tmp) {
        serializer_15.serialize_91(this, value);
        tmp$ret$0 = Unit_getInstance();
        break l$ret$1;
      } else {
      }
      var tmp_0 = isInterface(serializer_15, SerializationStrategy) ? serializer_15 : THROW_CCE();
      var actualSerializer_1 = findActualSerializer(this, tmp_0, isObject(value) ? value : THROW_CCE());
      this._writePolymorphic = true;
      actualSerializer_1.serialize_91(this, value);
    }
     while (false);
  };
  StreamingJsonEncoder.prototype.beginStructure_11 = function (descriptor) {
    var newMode = switchMode(this._json_1, descriptor);
    if (!newMode._begin.equals(new Char(0))) {
      this._composer.print_16(newMode._begin);
      this._composer.indent_0();
    }if (this._writePolymorphic) {
      this._writePolymorphic = false;
      encodeTypeInfo(this, descriptor);
    }if (this._mode_0.equals(newMode)) {
      return this;
    }var tmp0_safe_receiver = this._modeReuseCache;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode._get_ordinal__0()];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this._composer, this._json_1, newMode, this._modeReuseCache) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.endStructure_11 = function (descriptor) {
    if (!this._mode_0._end.equals(new Char(0))) {
      this._composer.unIndent_0();
      this._composer.nextItem_0();
      this._composer.print_16(this._mode_0._end);
    }};
  StreamingJsonEncoder.prototype.encodeElement_0 = function (descriptor, index) {
    var tmp0_subject = this._mode_0;
    if (tmp0_subject.equals(WriteMode_LIST_getInstance())) {
      if (!this._composer._writingFirst)
        this._composer.print_16(new Char(44));
      this._composer.nextItem_0();
    } else if (tmp0_subject.equals(WriteMode_MAP_getInstance())) {
      if (!this._composer._writingFirst) {
        var tmp = this;
        var tmp_0;
        if (index % 2 === 0) {
          this._composer.print_16(new Char(44));
          this._composer.nextItem_0();
          tmp_0 = true;
        } else {
          this._composer.print_16(new Char(58));
          this._composer.space_0();
          tmp_0 = false;
        }
        tmp._forceQuoting = tmp_0;
      } else {
        this._forceQuoting = true;
        this._composer.nextItem_0();
      }
    } else if (tmp0_subject.equals(WriteMode_POLY_OBJ_getInstance())) {
      if (index === 0)
        this._forceQuoting = true;
      if (index === 1) {
        this._composer.print_16(new Char(44));
        this._composer.space_0();
        this._forceQuoting = false;
      }} else {
      if (!this._composer._writingFirst)
        this._composer.print_16(new Char(44));
      this._composer.nextItem_0();
      this.encodeString_1(descriptor.getElementName_17(index));
      this._composer.print_16(new Char(58));
      this._composer.space_0();
    }
    return true;
  };
  StreamingJsonEncoder.prototype.encodeInline_1 = function (inlineDescriptor) {
    return _get_isUnsignedNumber_(inlineDescriptor) ? new StreamingJsonEncoder(new ComposerForUnsignedNumbers(this._composer._sb, this._json_1), this._json_1, this._mode_0, null) : AbstractEncoder.prototype.encodeInline_1.call(this, inlineDescriptor);
  };
  StreamingJsonEncoder.prototype.encodeNull_1 = function () {
    this._composer.print_17('null');
  };
  StreamingJsonEncoder.prototype.encodeBoolean_1 = function (value) {
    if (this._forceQuoting)
      this.encodeString_1(value.toString());
    else
      this._composer.print_20(value);
  };
  StreamingJsonEncoder.prototype.encodeByte_1 = function (value) {
    if (this._forceQuoting)
      this.encodeString_1(value.toString());
    else
      this._composer.print_14(value);
  };
  StreamingJsonEncoder.prototype.encodeShort_1 = function (value) {
    if (this._forceQuoting)
      this.encodeString_1(value.toString());
    else
      this._composer.print_15(value);
  };
  StreamingJsonEncoder.prototype.encodeInt_1 = function (value) {
    if (this._forceQuoting)
      this.encodeString_1(value.toString());
    else
      this._composer.print_12(value);
  };
  StreamingJsonEncoder.prototype.encodeLong_1 = function (value) {
    if (this._forceQuoting)
      this.encodeString_1(value.toString());
    else
      this._composer.print_13(value);
  };
  StreamingJsonEncoder.prototype.encodeFloat_1 = function (value) {
    if (this._forceQuoting)
      this.encodeString_1(value.toString());
    else
      this._composer.print_18(value);
    if (!this._configuration_1._allowSpecialFloatingPointValues_0 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, this._composer._sb.toString());
    }};
  StreamingJsonEncoder.prototype.encodeDouble_1 = function (value) {
    if (this._forceQuoting)
      this.encodeString_1(value.toString());
    else
      this._composer.print_19(value);
    if (!this._configuration_1._allowSpecialFloatingPointValues_0 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, this._composer._sb.toString());
    }};
  StreamingJsonEncoder.prototype.encodeChar_1 = function (value) {
    this.encodeString_1(value.toString());
  };
  StreamingJsonEncoder.prototype.encodeString_1 = function (value) {
    return this._composer.printQuoted_0(value);
  };
  StreamingJsonEncoder.prototype.encodeEnum_1 = function (enumDescriptor, index) {
    this.encodeString_1(enumDescriptor.getElementName_17(index));
  };
  StreamingJsonEncoder.$metadata$ = {
    simpleName: 'StreamingJsonEncoder',
    kind: 'class',
    interfaces: [JsonEncoder]
  };
  function _get_isUnsignedNumber_(_this_) {
    return _this_._get_isInline__17() ? unsignedNumberDescriptors.contains_26(_this_) : false;
  }
  var ESCAPE_STRINGS;
  function toHexChar(i) {
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp0__get_code__0 = new Char(48);
      tmp = numberToChar(d + tmp0__get_code__0.toInt_5() | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp1__get_code__0 = new Char(97);
      tmp = numberToChar(tmp_0 + tmp1__get_code__0.toInt_5() | 0);
    }
    return tmp;
  }
  function printQuoted(_this_, value) {
    _this_.append_1(new Char(34));
    Unit_getInstance();
    var lastPos = 0;
    var inductionVariable = 0;
    var last_0 = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0__get_code__0 = charSequenceGet(value, i);
        var c = tmp0__get_code__0.toInt_5();
        if (c < ESCAPE_STRINGS.length ? !(ESCAPE_STRINGS[c] == null) : false) {
          _this_.append_3(value, lastPos, i);
          Unit_getInstance();
          _this_.append_5(ESCAPE_STRINGS[c]);
          Unit_getInstance();
          lastPos = i + 1 | 0;
        }}
       while (inductionVariable <= last_0);
    if (!(lastPos === 0)) {
      _this_.append_3(value, lastPos, value.length);
      Unit_getInstance();
    } else {
      _this_.append_5(value);
      Unit_getInstance();
    }
    _this_.append_1(new Char(34));
    Unit_getInstance();
  }
  function toBooleanStrictOrNull(_this_) {
    return equals_0(_this_, 'true', true) ? true : equals_0(_this_, 'false', true) ? false : null;
  }
  function ESCAPE_STRINGS$init$() {
    var tmp0_arrayOfNulls_0 = 93;
    var tmp1_apply_0 = fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c_3 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1_4 = toHexChar(c_3 >> 12);
        var c2_5 = toHexChar(c_3 >> 8);
        var c3_6 = toHexChar(c_3 >> 4);
        var c4_7 = toHexChar(c_3);
        tmp1_apply_0[c_3] = '' + '\\u' + c1_4 + c2_5 + c3_6 + c4_7;
      }
       while (inductionVariable <= 31);
    var tmp0__get_code__0_8 = new Char(34);
    tmp1_apply_0[tmp0__get_code__0_8.toInt_5()] = '\\"';
    var tmp1__get_code__0_9 = new Char(92);
    tmp1_apply_0[tmp1__get_code__0_9.toInt_5()] = '\\\\';
    var tmp2__get_code__0_10 = new Char(9);
    tmp1_apply_0[tmp2__get_code__0_10.toInt_5()] = '\\t';
    var tmp3__get_code__0_11 = new Char(8);
    tmp1_apply_0[tmp3__get_code__0_11.toInt_5()] = '\\b';
    var tmp4__get_code__0_12 = new Char(10);
    tmp1_apply_0[tmp4__get_code__0_12.toInt_5()] = '\\n';
    var tmp5__get_code__0_13 = new Char(13);
    tmp1_apply_0[tmp5__get_code__0_13.toInt_5()] = '\\r';
    tmp1_apply_0[12] = '\\f';
    return tmp1_apply_0;
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this._get_currentTagOrNull__4();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = $this.currentElement_2(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this._get_value__14() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, '' + "Failed to parse '" + primitive + "'", toString_1(currentObject($this)));
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this._json_2 = json;
    this._value_2 = value;
    this._configuration_2 = this._get_json__6()._configuration;
  }
  AbstractJsonTreeDecoder.prototype._get_json__6 = function () {
    return this._json_2;
  };
  AbstractJsonTreeDecoder.prototype._get_value__14 = function () {
    return this._value_2;
  };
  AbstractJsonTreeDecoder.prototype._get_serializersModule__15 = function () {
    return this._get_json__6()._get_serializersModule__15();
  };
  AbstractJsonTreeDecoder.prototype._get_configuration__3 = function () {
    return this._configuration_2;
  };
  AbstractJsonTreeDecoder.prototype.decodeJsonElement_4 = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.decodeSerializableValue_16 = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.composeName_3 = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.beginStructure_11 = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor._get_kind__17();
    var tmp;
    var tmp_0;
    if (equals_1(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this._get_json__6();
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, '' + 'Expected ' + getKClass_0(JsonArray) + ' as the serialized body of ' + descriptor._get_serialName__17() + ', but had ' + getKClassFromExpression_0(currentObject_0));
      } else {
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject_0);
    } else {
      if (equals_1(tmp0_subject, MAP_getInstance())) {
        var tmp0_selectMapMode_0 = this._get_json__6();
        var keyDescriptor_1 = _get_carrierDescriptor_(descriptor.getElementDescriptor_17(0));
        var keyKind_2 = keyDescriptor_1._get_kind__17();
        var tmp_2;
        var tmp_3;
        if (keyKind_2 instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          {
            tmp_3 = equals_1(keyKind_2, ENUM_getInstance());
          }
        }
        if (tmp_3) {
          var tmp_4 = this._get_json__6();
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, '' + 'Expected ' + getKClass_0(JsonObject) + ' as the serialized body of ' + descriptor._get_serialName__17() + ', but had ' + getKClassFromExpression_0(currentObject_0));
          } else {
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject_0);
        } else {
          if (tmp0_selectMapMode_0._configuration._allowStructuredMapKeys_0) {
            var tmp_5 = this._get_json__6();
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, '' + 'Expected ' + getKClass_0(JsonArray) + ' as the serialized body of ' + descriptor._get_serialName__17() + ', but had ' + getKClassFromExpression_0(currentObject_0));
            } else {
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject_0);
          } else {
            {
              throw InvalidKeyKindException(keyDescriptor_1);
            }
          }
        }
        tmp = tmp_2;
      } else {
        {
          var tmp_6 = this._get_json__6();
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, '' + 'Expected ' + getKClass_0(JsonObject) + ' as the serialized body of ' + descriptor._get_serialName__17() + ', but had ' + getKClassFromExpression_0(currentObject_0));
          } else {
          }
          var tmp_7 = currentObject_0;
          tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
        }
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.endStructure_11 = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.decodeNotNullMark_8 = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.getValue_2 = function (tag) {
    var currentElement = this.currentElement_2(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, '' + 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString_1(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_5 = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this._get_json__6(), this.getValue_2(tag)._get_content__1());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_2 = function (tag, enumDescriptor) {
    return this.decodeTaggedEnum_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_5 = function (tag) {
    return !(this.currentElement_2(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_2 = function (tag) {
    return this.decodeTaggedNotNullMark_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_5 = function (tag) {
    var value = this.getValue_2(tag);
    if (!this._get_json__6()._configuration._isLenient_0) {
      var literal = value instanceof JsonLiteral ? value : THROW_CCE();
      if (literal._isString)
        throw JsonDecodingException_0(-1, '' + "Boolean literal for key '" + tag + "' should be unquoted.\nUse 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.", toString_1(currentObject(this)));
    }var tmp$ret$0;
    l$ret$1: do {
      var tmp0_primitive_0 = 'boolean';
      try {
        var tmp0_elvis_lhs_4 = _get_booleanOrNull_(value);
        var tmp;
        if (tmp0_elvis_lhs_4 == null) {
          throw IllegalArgumentException_init_$Create$();
        } else {
          tmp = tmp0_elvis_lhs_4;
        }
        var tmp0_elvis_lhs_1 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, tmp0_primitive_0);
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$0 = tmp_0;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, tmp0_primitive_0);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_2 = function (tag) {
    return this.decodeTaggedBoolean_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_5 = function (tag) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag);
      var tmp1_primitive_0 = 'byte';
      try {
        var result_4 = _get_int_(tmp0_primitive_0);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance()._MIN_VALUE_3;
        if (result_4 <= ByteCompanionObject_getInstance()._MAX_VALUE_3 ? containsLower <= result_4 : false) {
          tmp = toByte(result_4);
        } else {
          {
            tmp = null;
          }
        }
        var tmp0_elvis_lhs_1 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$0 = tmp_0;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_2 = function (tag) {
    return this.decodeTaggedByte_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_5 = function (tag) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag);
      var tmp1_primitive_0 = 'short';
      try {
        var result_4 = _get_int_(tmp0_primitive_0);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance()._MIN_VALUE_4;
        if (result_4 <= ShortCompanionObject_getInstance()._MAX_VALUE_4 ? containsLower <= result_4 : false) {
          tmp = toShort(result_4);
        } else {
          {
            tmp = null;
          }
        }
        var tmp0_elvis_lhs_1 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          tmp_0 = tmp0_elvis_lhs_1;
        }
        tmp$ret$0 = tmp_0;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_2 = function (tag) {
    return this.decodeTaggedShort_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_5 = function (tag) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag);
      var tmp1_primitive_0 = 'int';
      try {
        var tmp0_elvis_lhs_1 = _get_int_(tmp0_primitive_0);
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$0 = tmp;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_2 = function (tag) {
    return this.decodeTaggedInt_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_5 = function (tag) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag);
      var tmp1_primitive_0 = 'long';
      try {
        var tmp0_elvis_lhs_1 = _get_long_(tmp0_primitive_0);
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$0 = tmp;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_2 = function (tag) {
    return this.decodeTaggedLong_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_5 = function (tag) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag);
      var tmp1_primitive_0 = 'float';
      try {
        var tmp0_elvis_lhs_1 = _get_float_(tmp0_primitive_0);
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$0 = tmp;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    var result = tmp$ret$0;
    var specialFp = this._get_json__6()._configuration._allowSpecialFloatingPointValues_0;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString_1(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_2 = function (tag) {
    return this.decodeTaggedFloat_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_5 = function (tag) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag);
      var tmp1_primitive_0 = 'double';
      try {
        var tmp0_elvis_lhs_1 = _get_double_(tmp0_primitive_0);
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$0 = tmp;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    var result = tmp$ret$0;
    var specialFp = this._get_json__6()._configuration._allowSpecialFloatingPointValues_0;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString_1(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_2 = function (tag) {
    return this.decodeTaggedDouble_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_5 = function (tag) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_primitive_0 = this.getValue_2(tag);
      var tmp1_primitive_0 = 'char';
      try {
        var tmp0_elvis_lhs_1 = single_2(tmp0_primitive_0._get_content__1());
        var tmp;
        if (tmp0_elvis_lhs_1 == null) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          tmp = tmp0_elvis_lhs_1;
        }
        tmp$ret$0 = tmp;
        break l$ret$1;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, tmp1_primitive_0);
        } else {
          {
            throw $p;
          }
        }
      }
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_2 = function (tag) {
    return this.decodeTaggedChar_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_5 = function (tag) {
    var value = this.getValue_2(tag);
    if (!this._get_json__6()._configuration._isLenient_0) {
      var literal = value instanceof JsonLiteral ? value : THROW_CCE();
      if (!literal._isString)
        throw JsonDecodingException_0(-1, '' + "String literal for key '" + tag + "' should be quoted.\nUse 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.", toString_1(currentObject(this)));
    }return value._get_content__1();
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_2 = function (tag) {
    return this.decodeTaggedString_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInline_5 = function (tag, inlineDescriptor) {
    return _get_isUnsignedNumber_(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new JsonLexer(this.getValue_2(tag)._get_content__1()), this._get_json__6()) : NamedValueDecoder.prototype.decodeTaggedInline_2.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInline_2 = function (tag, inlineDescriptor) {
    return this.decodeTaggedInline_5((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  AbstractJsonTreeDecoder.$metadata$ = {
    simpleName: 'AbstractJsonTreeDecoder',
    kind: 'class',
    interfaces: [JsonDecoder]
  };
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var elementDescriptor = descriptor.getElementDescriptor_17(index);
    var tmp;
    var tmp_0 = $this.currentElement_2(tag);
    if (tmp_0 instanceof JsonNull) {
      tmp = !elementDescriptor._get_isNullable__17();
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return true;
    else {
    }
    if (equals_1(elementDescriptor._get_kind__17(), ENUM_getInstance())) {
      var tmp_1 = $this.currentElement_2(tag);
      var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : _get_contentOrNull_(tmp0_safe_receiver);
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var enumValue = tmp_2;
      var enumIndex = getJsonNameIndex(elementDescriptor, $this._get_json__6(), enumValue);
      Companion_getInstance_12();
      if (enumIndex === -3)
        return true;
      else {
      }
    }return false;
  }
  function _no_name_provided__63($boundThis) {
    this._$boundThis_0 = $boundThis;
  }
  _no_name_provided__63.prototype.invoke_93 = function () {
    return buildAlternativeNamesMap(this._$boundThis_0);
  };
  _no_name_provided__63.prototype._get_name__1 = function () {
    return 'buildAlternativeNamesMap';
  };
  _no_name_provided__63.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this._value_3 = value;
    this._polyDiscriminator = polyDiscriminator;
    this._polyDescriptor = polyDescriptor;
    this._position_7 = 0;
  }
  JsonTreeDecoder.prototype._get_value__14 = function () {
    return this._value_3;
  };
  JsonTreeDecoder.prototype.decodeElementIndex_8 = function (descriptor) {
    while (this._position_7 < descriptor._get_elementsCount__17()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._position_7;
      tmp0_this._position_7 = tmp1 + 1 | 0;
      var name = this.getTag_4(descriptor, tmp1);
      var tmp;
      var tmp0_contains_0 = this._get_value__14();
      if ((isInterface(tmp0_contains_0, Map_0) ? tmp0_contains_0 : THROW_CCE()).containsKey_8(name)) {
        tmp = !this._get_configuration__3()._coerceInputValues_0 ? true : !coerceInputValue_0(this, descriptor, this._position_7 - 1 | 0, name);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        return this._position_7 - 1 | 0;
      } else {
      }
    }
    Companion_getInstance_12();
    return -1;
  };
  JsonTreeDecoder.prototype.elementName_3 = function (desc, index) {
    var mainName = desc.getElementName_17(index);
    if (!this._get_configuration__3()._useAlternativeNames_0)
      return mainName;
    if (this._get_value__14()._get_keys__5().contains_26(mainName))
      return mainName;
    var tmp = this._get_json__6()._schemaCache;
    var alternativeNamesMap = tmp.getOrPut(desc, JsonAlternativeNamesKey, _no_name_provided_$factory_52(desc));
    var tmp0_find_0 = this._get_value__14()._get_keys__5();
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_iterator_1_1 = tmp0_find_0.iterator_38();
      while (tmp0_iterator_1_1.hasNext_13()) {
        var element_2_2 = tmp0_iterator_1_1.next_13();
        if (alternativeNamesMap.get_16(element_2_2) === index) {
          tmp$ret$0 = element_2_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    var nameInObject = tmp$ret$0;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.currentElement_2 = function (tag) {
    return getValue(this._get_value__14(), tag);
  };
  JsonTreeDecoder.prototype.beginStructure_11 = function (descriptor) {
    if (descriptor === this._polyDescriptor)
      return this;
    return AbstractJsonTreeDecoder.prototype.beginStructure_11.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.endStructure_11 = function (descriptor) {
    var tmp;
    if (this._get_configuration__3()._ignoreUnknownKeys_0) {
      tmp = true;
    } else {
      var tmp_0 = descriptor._get_kind__17();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    else {
    }
    var tmp_1;
    if (!this._get_configuration__3()._useAlternativeNames_0) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = this._get_json__6()._schemaCache.get_18(descriptor, JsonAlternativeNamesKey);
      var tmp0_orEmpty_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_keys__5();
      var tmp0_elvis_lhs_1 = tmp0_orEmpty_0;
      tmp_1 = plus(tmp_2, tmp0_elvis_lhs_1 == null ? emptySet() : tmp0_elvis_lhs_1);
    }
    var names = tmp_1;
    var tmp1_iterator = this._get_value__14()._get_keys__5().iterator_38();
    while (tmp1_iterator.hasNext_13()) {
      var key = tmp1_iterator.next_13();
      if (!names.contains_26(key) ? !(key === this._polyDiscriminator) : false) {
        throw UnknownKeyException(key, this._get_value__14().toString());
      }}
  };
  JsonTreeDecoder.$metadata$ = {
    simpleName: 'JsonTreeDecoder',
    kind: 'class',
    interfaces: []
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this._value_4 = value;
    this._size_0 = this._value_4._get_size__28();
    this._currentIndex_0 = -1;
  }
  JsonTreeListDecoder.prototype._get_value__14 = function () {
    return this._value_4;
  };
  JsonTreeListDecoder.prototype.elementName_3 = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.currentElement_2 = function (tag) {
    return this._value_4.get_28(toInt(tag));
  };
  JsonTreeListDecoder.prototype.decodeElementIndex_8 = function (descriptor) {
    while (this._currentIndex_0 < (this._size_0 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._currentIndex_0;
      tmp0_this._currentIndex_0 = tmp1 + 1 | 0;
      Unit_getInstance();
      return this._currentIndex_0;
    }
    Companion_getInstance_12();
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = {
    simpleName: 'JsonTreeListDecoder',
    kind: 'class',
    interfaces: []
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this._value_5 = value;
    this._keys_0 = toList_0(this._value_5._get_keys__5());
    this._size_1 = imul(this._keys_0._get_size__28(), 2);
    this._position_8 = -1;
  }
  JsonTreeMapDecoder.prototype._get_value__14 = function () {
    return this._value_5;
  };
  JsonTreeMapDecoder.prototype.elementName_3 = function (desc, index) {
    var i = index / 2 | 0;
    return this._keys_0.get_28(i);
  };
  JsonTreeMapDecoder.prototype.decodeElementIndex_8 = function (descriptor) {
    while (this._position_8 < (this._size_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._position_8;
      tmp0_this._position_8 = tmp1 + 1 | 0;
      Unit_getInstance();
      return this._position_8;
    }
    Companion_getInstance_12();
    return -1;
  };
  JsonTreeMapDecoder.prototype.currentElement_2 = function (tag) {
    return this._position_8 % 2 === 0 ? JsonPrimitive_0(tag) : getValue(this._value_5, tag);
  };
  JsonTreeMapDecoder.prototype.endStructure_11 = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = {
    simpleName: 'JsonTreeMapDecoder',
    kind: 'class',
    interfaces: []
  };
  function readPolymorphicJson(_this_, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this_, element, discriminator, deserializer._get_descriptor__57())).decodeSerializableValue_16(deserializer);
  }
  function _no_name_provided_$factory_52($boundThis) {
    var i = new _no_name_provided__63($boundThis);
    var l = function () {
      return i.invoke_93();
    };
    l.callableName = i._get_name__1();
    return l;
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, new Char(123), new Char(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, new Char(91), new Char(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, new Char(123), new Char(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, new Char(91), new Char(93));
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this._begin = begin;
    this._end = end;
  }
  WriteMode.$metadata$ = {
    simpleName: 'WriteMode',
    kind: 'class',
    interfaces: []
  };
  function switchMode(_this_, desc) {
    var tmp0_subject = desc._get_kind__17();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals_1(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals_1(tmp0_subject, MAP_getInstance())) {
          var keyDescriptor_1 = _get_carrierDescriptor_(desc.getElementDescriptor_17(0));
          var keyKind_2 = keyDescriptor_1._get_kind__17();
          var tmp_0;
          var tmp_1;
          if (keyKind_2 instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            {
              tmp_1 = equals_1(keyKind_2, ENUM_getInstance());
            }
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this_._configuration._allowStructuredMapKeys_0) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              {
                throw InvalidKeyKindException(keyDescriptor_1);
              }
            }
          }
          tmp = tmp_0;
        } else {
          {
            tmp = WriteMode_OBJ_getInstance();
          }
        }
      }
    }
    return tmp;
  }
  function _get_carrierDescriptor_(_this_) {
    return _this_._get_isInline__17() ? _this_.getElementDescriptor_17(0) : _this_;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function JsonStringBuilder() {
    this._sb_0 = StringBuilder_init_$Create$(128);
  }
  JsonStringBuilder.prototype.append_14 = function (value) {
    this._sb_0.append_4(value);
    Unit_getInstance();
  };
  JsonStringBuilder.prototype.append_15 = function (ch) {
    this._sb_0.append_1(ch);
    Unit_getInstance();
  };
  JsonStringBuilder.prototype.append_16 = function (string) {
    this._sb_0.append_5(string);
    Unit_getInstance();
  };
  JsonStringBuilder.prototype.appendQuoted = function (string) {
    printQuoted(this._sb_0, string);
  };
  JsonStringBuilder.prototype.toString = function () {
    return this._sb_0.toString();
  };
  JsonStringBuilder.prototype.release = function () {
  };
  JsonStringBuilder.$metadata$ = {
    simpleName: 'JsonStringBuilder',
    kind: 'class',
    interfaces: []
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$_1(initialCapacity);
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.amplitude.experiment.evaluation.Allocation', this, 2);
    tmp0_serialDesc.addElement_0('percentage', false);
    tmp0_serialDesc.addElement_0('weights', false);
    this._descriptor_32 = tmp0_serialDesc;
  }
  $serializer.prototype._get_descriptor__57 = function () {
    return this._descriptor_32;
  };
  $serializer.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [IntSerializer_getInstance(), new NullableSerializer(new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance()))];
    return tmp0_arrayOf_0;
  };
  $serializer.prototype.deserialize_61 = function (decoder) {
    var tmp0_desc = this._descriptor_32;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_11(tmp0_desc);
    if (tmp6_input.decodeSequentially_8()) {
      tmp4_local0 = tmp6_input.decodeIntElement_8(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_8(tmp0_desc, 1, new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance()), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeIntElement_8(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_8(tmp0_desc, 1, new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance()), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_11(tmp0_desc);
    return Allocation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer.prototype.serialize_76 = function (encoder, value) {
    var tmp0_desc = this._descriptor_32;
    var tmp1_output = encoder.beginStructure_11(tmp0_desc);
    tmp1_output.encodeIntElement_1(tmp0_desc, 0, value._percentage);
    tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 1, new LinkedHashMapSerializer(StringSerializer_getInstance(), IntSerializer_getInstance()), value._weights);
    tmp1_output.endStructure_11(tmp0_desc);
  };
  $serializer.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_76(encoder, value instanceof Allocation ? value : THROW_CCE());
  };
  $serializer.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Allocation_init_$Init$(seen1, percentage, weights, serializationConstructorMarker, $this) {
    if (0 === (seen1 & 1))
      throw MissingFieldException_init_$Create$('percentage');
    else
      $this._percentage = percentage;
    if (0 === (seen1 & 2))
      throw MissingFieldException_init_$Create$('weights');
    else
      $this._weights = weights;
    return $this;
  }
  function Allocation_init_$Create$(seen1, percentage, weights, serializationConstructorMarker) {
    return Allocation_init_$Init$(seen1, percentage, weights, serializationConstructorMarker, Object.create(Allocation.prototype));
  }
  function Allocation() {
  }
  Allocation.prototype.toString = function () {
    return '' + 'Allocation(percentage=' + this._percentage + ', weights=' + this._weights + ')';
  };
  Allocation.prototype.hashCode = function () {
    var result = this._percentage;
    result = imul(result, 31) + (this._weights == null ? 0 : hashCode(this._weights)) | 0;
    return result;
  };
  Allocation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Allocation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Allocation ? other : THROW_CCE();
    if (!(this._percentage === tmp0_other_with_cast._percentage))
      return false;
    if (!equals_1(this._weights, tmp0_other_with_cast._weights))
      return false;
    return true;
  };
  Allocation.$metadata$ = {
    simpleName: 'Allocation',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance}
  };
  function getVariantDistribution(_this_, variants) {
    var distribution = ArrayList_init_$Create$();
    var totalWeight = getTotalWeightForVariants(_this_, variants);
    if (totalWeight.equals(new Long(0, 0))) {
      var pct = 1.0 / variants._get_size__28();
      var inductionVariable = 0;
      var last_0 = variants._get_size__28() - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          distribution.add_16(new VariantDistribution(variants.get_28(i), pct, (i + 1 | 0) * pct));
          Unit_getInstance();
        }
         while (inductionVariable <= last_0);
    } else {
      var cumulativeWeight = 0;
      var cumulativePct = 0.0;
      var tmp1_iterator = variants.iterator_38();
      while (tmp1_iterator.hasNext_13()) {
        var variant = tmp1_iterator.next_13();
        var pct_0 = 0.0;
        var tmp2_safe_receiver = _this_._weights;
        var tmp;
        if (tmp2_safe_receiver == null) {
          tmp = null;
        } else {
          var tmp0_get_0 = variant._key_1;
          tmp = ((!(tmp2_safe_receiver == null) ? isInterface(tmp2_safe_receiver, Map_0) : false) ? tmp2_safe_receiver : THROW_CCE()).get_16(tmp0_get_0);
        }
        var tmp3_elvis_lhs = tmp;
        var variantRolloutWeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
        if (variantRolloutWeight > 0) {
          cumulativeWeight = cumulativeWeight + variantRolloutWeight | 0;
          pct_0 = variantRolloutWeight / totalWeight.toDouble_4();
          cumulativePct = cumulativeWeight / totalWeight.toDouble_4();
        }distribution.add_16(new VariantDistribution(variant, pct_0, cumulativePct));
        Unit_getInstance();
      }
    }
    return distribution;
  }
  function getTotalWeightForVariants(_this_, variants) {
    var totalWeight = new Long(0, 0);
    if (!(_this_._weights == null)) {
      var tmp0_iterator = variants.iterator_38();
      while (tmp0_iterator.hasNext_13()) {
        var variant = tmp0_iterator.next_13();
        var tmp2_plus_0 = totalWeight;
        var tmp0_get_0 = _this_._weights;
        var tmp1_get_0 = variant._key_1;
        var tmp1_elvis_lhs = ((!(tmp0_get_0 == null) ? isInterface(tmp0_get_0, Map_0) : false) ? tmp0_get_0 : THROW_CCE()).get_16(tmp1_get_0);
        var tmp3_plus_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        totalWeight = tmp2_plus_0.plus_27(toLong_0(tmp3_plus_0));
      }
    }return totalWeight;
  }
  function scaled($this, pct, max) {
    var tmp0_plus_0 = 1;
    return pct * max.plus_27(toLong_0(tmp0_plus_0)).toDouble_4();
  }
  function checkGlobalHoldback($this, flag, user) {
    var tmp;
    if (flag._globalHoldbackPct === 0) {
      tmp = true;
    } else {
      var tmp0_isNullOrEmpty_0 = flag._globalHoldbackSalt;
      tmp = tmp0_isNullOrEmpty_0 == null ? true : charSequenceLength(tmp0_isNullOrEmpty_0) === 0;
    }
    if (tmp) {
      return null;
    } else {
    }
    var tmp0_safe_receiver = user;
    var bucketingValue = tmp0_safe_receiver == null ? null : getBucketingValue(tmp0_safe_receiver, flag._globalHoldbackBucketingKey);
    var keyToHash = '' + 'gh/' + flag._globalHoldbackSalt + '/' + bucketingValue;
    var hash = $this.getHash(keyToHash);
    var upperBound = scaled($this, flag._globalHoldbackPct / 10000.0, new Long(-1, 0));
    var tmp_0;
    if (hash.toDouble_4() < upperBound) {
      var tmp_1 = Variant_init_$Create$(flag._defaultValue, null, 2, null);
      Companion_getInstance_17();
      tmp_0 = new EvaluationResult(tmp_1, 'global-holdback');
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function checkMutualExclusion($this, flag, user) {
    if (flag._mutualExclusionConfig == null) {
      return null;
    }var tmp0_safe_receiver = user;
    var bucketingValue = tmp0_safe_receiver == null ? null : getBucketingValue(tmp0_safe_receiver, flag._mutualExclusionConfig._bucketingKey_0);
    var keyToHash = '' + 'me/' + flag._mutualExclusionConfig._groupSalt + '/' + bucketingValue;
    var hash = $this.getHash(keyToHash);
    var lowerBound = scaled($this, flag._mutualExclusionConfig._lowerBound / 10000.0, new Long(-1, 0));
    var upperBound = scaled($this, (flag._mutualExclusionConfig._lowerBound + flag._mutualExclusionConfig._percentage_0 | 0) / 10000.0, new Long(-1, 0));
    var tmp;
    if (hash.toDouble_4() < lowerBound ? true : hash.toDouble_4() >= upperBound) {
      var tmp_0 = Variant_init_$Create$(flag._defaultValue, null, 2, null);
      Companion_getInstance_17();
      tmp = new EvaluationResult(tmp_0, 'mutual-exclusion-group');
    } else {
      tmp = null;
    }
    return tmp;
  }
  function checkStickyBucketing($this, flag, user) {
    if (!flag._useStickyBucketing) {
      return null;
    }if (flag._userProperty == null) {
      return null;
    }var tmp0_elvis_lhs = convertFlagUserProperty(flag);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var propertyKey = tmp;
    var propertyValue = getProperty(user, propertyKey);
    var tmp_0;
    if (!(propertyValue == null) ? !(propertyValue == flag._defaultValue) : false) {
      var tmp_1 = Variant_init_$Create$(propertyValue, null, 2, null);
      Companion_getInstance_17();
      tmp_0 = new EvaluationResult(tmp_1, 'sticky-bucketing');
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function checkEnabled($this, flag) {
    var tmp;
    if (!flag._enabled) {
      var tmp_0 = Variant_init_$Create$(flag._defaultValue, null, 2, null);
      Companion_getInstance_17();
      tmp = new EvaluationResult(tmp_0, 'flag-disabled');
    } else {
      tmp = null;
    }
    return tmp;
  }
  function checkEmptyUser($this, flag, user) {
    if (user == null) {
      var variant = getFullyRolledOutVariantIfPresent(flag);
      var tmp;
      if (!(variant == null)) {
        Companion_getInstance_17();
        tmp = new EvaluationResult(variant, 'missing-user-fully-rolled-out-variant');
      } else {
        var tmp_0 = Variant_init_$Create$(flag._defaultValue, null, 2, null);
        Companion_getInstance_17();
        tmp = new EvaluationResult(tmp_0, 'missing-user-default-variant');
      }
      return tmp;
    }return null;
  }
  function checkEmptyBucketingValue($this, flag, bucketingValue) {
    if (bucketingValue == null ? true : charSequenceLength(bucketingValue) === 0) {
      var variant = getFullyRolledOutVariantIfPresent(flag);
      var tmp;
      if (!(variant == null)) {
        Companion_getInstance_17();
        tmp = new EvaluationResult(variant, 'empty-bucketing-key-fully-rolled-out-variant');
      } else {
        var tmp_0 = Variant_init_$Create$(flag._defaultValue, null, 2, null);
        Companion_getInstance_17();
        tmp = new EvaluationResult(tmp_0, 'empty-bucketing-key-default-value');
      }
      return tmp;
    } else {
    }
    return null;
  }
  function checkSegmentRules($this, flag, user, bucketingValue, excludedVariantsForUser) {
    var tmp;
    if (!(flag._customSegmentTargetingConfigs == null)) {
      var tmp0_isNotEmpty_0 = flag._customSegmentTargetingConfigs;
      tmp = !tmp0_isNotEmpty_0.isEmpty_28();
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp0_iterator = flag._customSegmentTargetingConfigs.iterator_38();
      while (tmp0_iterator.hasNext_13()) {
        var segTargetingConfig = tmp0_iterator.next_13();
        if (!match(segTargetingConfig, user)) {
          continue;
        }var tmp_0;
        var tmp1_isEmpty_0 = segTargetingConfig._bucketingKey_1;
        if (charSequenceLength(tmp1_isEmpty_0) === 0) {
          tmp_0 = bucketingValue;
        } else {
          {
            var tmp1_safe_receiver = user;
            tmp_0 = tmp1_safe_receiver == null ? null : getBucketingValue(tmp1_safe_receiver, segTargetingConfig._bucketingKey_1);
          }
        }
        var resolvedBucketingValue = tmp_0;
        var variant = $this.getVariantBasedOnRollout(flag._variants, segTargetingConfig._allocations, flag._defaultValue, excludedVariantsForUser, flag._bucketingSalt, resolvedBucketingValue);
        return new EvaluationResult(variant, segTargetingConfig._name_0);
      }
    } else {
    }
    return null;
  }
  function checkAllUsersRule($this, flag, user, bucketingValue, excludedVariantsForUser) {
    var fullyRolledOutVariant = getFullyRolledOutVariantIfPresent(flag);
    if (!(fullyRolledOutVariant == null)) {
      if (!excludedVariantsForUser.contains_26(fullyRolledOutVariant._key_1)) {
        Companion_getInstance_17();
        return new EvaluationResult(fullyRolledOutVariant, 'fully-rolled-out-variant');
      }}var bucketingKey = flag._allUsersTargetingConfig._bucketingKey_1;
    var tmp;
    if (charSequenceLength(bucketingKey) === 0) {
      tmp = bucketingValue;
    } else {
      {
        var tmp0_safe_receiver = user;
        tmp = tmp0_safe_receiver == null ? null : getBucketingValue(tmp0_safe_receiver, bucketingKey);
      }
    }
    var resolvedBucketingValue = tmp;
    var variant = $this.getVariantBasedOnRollout(flag._variants, flag._allUsersTargetingConfig._allocations, flag._defaultValue, excludedVariantsForUser, flag._bucketingSalt, resolvedBucketingValue);
    Companion_getInstance_17();
    return new EvaluationResult(variant, 'default-segment');
  }
  function getExclusions($this, flag, user) {
    var excludedVariantsForUser = LinkedHashSet_init_$Create$();
    if (flag._variantsExclusions == null) {
      return excludedVariantsForUser;
    }var tmp0_iterator = flag._variants.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var variant = tmp0_iterator.next_13();
      var tmp0_get_0 = flag._variantsExclusions;
      var tmp1_get_0 = variant._key_1;
      var tmp1_elvis_lhs = ((!(tmp0_get_0 == null) ? isInterface(tmp0_get_0, Map_0) : false) ? tmp0_get_0 : THROW_CCE()).get_16(tmp1_get_0);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var exclusions = tmp;
      if (contains_0(exclusions, user._userId) ? true : contains_0(exclusions, user._deviceId)) {
        excludedVariantsForUser.add_16(variant._key_1);
        Unit_getInstance();
      }}
    return excludedVariantsForUser;
  }
  function checkInclusions($this, flag, user, excludedVariantsForUser) {
    if (flag._variantsInclusions == null) {
      return null;
    }var tmp0_iterator = flag._variants.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var variant = tmp0_iterator.next_13();
      var tmp0_get_0 = flag._variantsInclusions;
      var tmp1_get_0 = variant._key_1;
      var tmp1_elvis_lhs = ((!(tmp0_get_0 == null) ? isInterface(tmp0_get_0, Map_0) : false) ? tmp0_get_0 : THROW_CCE()).get_16(tmp1_get_0);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var inclusions = tmp;
      if (excludedVariantsForUser.contains_26(variant._key_1)) {
        continue;
      }if (contains_0(inclusions, user._userId) ? true : contains_0(inclusions, user._deviceId)) {
        Companion_getInstance_17();
        return new EvaluationResult(variant, 'inclusion-list');
      }}
    return null;
  }
  function EvaluationEngineImpl() {
  }
  EvaluationEngineImpl.prototype.evaluate = function (flags, user) {
    var result = LinkedHashMap_init_$Create$();
    var tmp0_iterator = flags.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var flag = tmp0_iterator.next_13();
      var evalResult = this.evaluateFlag(flag, user);
      var flagResult = FlagResult_init_$Create$(flag, evalResult);
      var tmp0_set_0 = flag._flagKey;
      result.put_4(tmp0_set_0, flagResult);
      Unit_getInstance();
    }
    return result;
  };
  EvaluationEngineImpl.prototype.evaluateFlag = function (flag, user) {
    var tmp0_elvis_lhs = checkEnabled(this, flag);
    var result = tmp0_elvis_lhs == null ? checkEmptyUser(this, flag, user) : tmp0_elvis_lhs;
    if (!(result == null)) {
      return result;
    }if (user == null) {
      throw RuntimeException_init_$Create$('User should always be non-null at this point.');
    }var excludedVariantsForUser = getExclusions(this, flag, user);
    result = checkInclusions(this, flag, user, excludedVariantsForUser);
    if (!(result == null)) {
      return result;
    }var bucketingValue = getBucketingValue(user, flag._bucketingKey);
    var tmp1_elvis_lhs = checkGlobalHoldback(this, flag, user);
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? checkMutualExclusion(this, flag, user) : tmp1_elvis_lhs;
    var tmp3_elvis_lhs = tmp2_elvis_lhs == null ? checkStickyBucketing(this, flag, user) : tmp2_elvis_lhs;
    var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? checkEmptyBucketingValue(this, flag, bucketingValue) : tmp3_elvis_lhs;
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? checkSegmentRules(this, flag, user, bucketingValue, excludedVariantsForUser) : tmp4_elvis_lhs;
    result = tmp5_elvis_lhs == null ? checkAllUsersRule(this, flag, user, bucketingValue, excludedVariantsForUser) : tmp5_elvis_lhs;
    return result;
  };
  EvaluationEngineImpl.prototype.getHash = function (key) {
    var data = encodeToByteArray(key);
    var value = Murmur3_getInstance().hash32x86(data, data.length, 0);
    return toLong_0(value).and(new Long(-1, 0));
  };
  EvaluationEngineImpl.prototype.getVariantBasedOnRollout = function (variants, allocations, defaultValue, excludedVariantsForUser, bucketingSalt, bucketingValue) {
    var keyToHash = '' + bucketingSalt + '/' + bucketingValue;
    var hash = this.getHash(keyToHash);
    var tmp0_rem_0 = 100;
    var bucket = hash.rem_27(toLong_0(tmp0_rem_0));
    var tmp1_floorDiv_0 = 100;
    var tmp0_floorDiv_0_1 = toLong_0(tmp1_floorDiv_0);
    var q_1_2 = hash.div_27(tmp0_floorDiv_0_1);
    if (hash.xor(tmp0_floorDiv_0_1).compareTo_45(new Long(0, 0)) < 0 ? !q_1_2.times_27(tmp0_floorDiv_0_1).equals(hash) : false) {
      var tmp0_2_3 = q_1_2;
      q_1_2 = tmp0_2_3.dec_4();
      Unit_getInstance();
    }var variantHash = q_1_2;
    var minBucket;
    var maxBucket = new Long(0, 0);
    var tmp0_iterator = allocations.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var allocation = tmp0_iterator.next_13();
      minBucket = maxBucket;
      maxBucket = maxBucket.plus_27(toLong_0(allocation._percentage / 100 | 0));
      if (minBucket.compareTo_45(bucket) <= 0 ? bucket.compareTo_45(maxBucket) < 0 : false) {
        var distribution = getVariantDistribution(allocation, variants);
        if (distribution.isEmpty_28()) {
          continue;
        }var upperBound;
        var tmp1_iterator = distribution.iterator_38();
        while (tmp1_iterator.hasNext_13()) {
          var slice_0 = tmp1_iterator.next_13();
          if (slice_0._pct <= 0.0) {
            continue;
          }upperBound = scaled(this, slice_0._cumulativePct, new Long(42949672, 0));
          if (variantHash.toDouble_4() >= upperBound) {
            continue;
          }var tmp;
          if (excludedVariantsForUser.contains_26(slice_0._variant_1._key_1)) {
            tmp = Variant_init_$Create$(defaultValue, null, 2, null);
          } else {
            tmp = slice_0._variant_1;
          }
          return tmp;
        }
      }}
    return Variant_init_$Create$(defaultValue, null, 2, null);
  };
  EvaluationEngineImpl.$metadata$ = {
    simpleName: 'EvaluationEngineImpl',
    kind: 'class',
    interfaces: [EvaluationEngine]
  };
  function EvaluationEngine() {
  }
  EvaluationEngine.$metadata$ = {
    simpleName: 'EvaluationEngine',
    kind: 'interface',
    interfaces: []
  };
  function Companion_18() {
    Companion_instance_17 = this;
    this._DESC_MISSING_USER_FULLY_ROLLED_OUT = 'missing-user-fully-rolled-out-variant';
    this._DESC_MISSING_USER_DEFAULT_VARIANT = 'missing-user-default-variant';
    this._DESC_EMPTY_BUCKETING_KEY_FULLY_ROLLED_OUT_VARIANT = 'empty-bucketing-key-fully-rolled-out-variant';
    this._DESC_EMPTY_BUCKETING_KEY_DEFAULT_VALUE = 'empty-bucketing-key-default-value';
    this._DESC_FULLY_ROLLED_OUT_VARIANT = 'fully-rolled-out-variant';
    this._DESC_GLOBAL_HOLDBACK = 'global-holdback';
    this._DESC_MUTUAL_EXCLUSION = 'mutual-exclusion-group';
    this._DESC_STICKY_BUCKETING = 'sticky-bucketing';
    this._DESC_DEFAULT_SEGMENT = 'default-segment';
    this._DESC_INCLUSION_LIST = 'inclusion-list';
    this._DESC_FLAG_DISABLED = 'flag-disabled';
  }
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_18();
    return Companion_instance_17;
  }
  function EvaluationResult(variant, description) {
    Companion_getInstance_17();
    this._variant = variant;
    this._description = description;
  }
  EvaluationResult.prototype.toString = function () {
    return '' + 'EvaluationResult(variant=' + this._variant + ', description=' + this._description + ')';
  };
  EvaluationResult.prototype.hashCode = function () {
    var result = this._variant.hashCode();
    result = imul(result, 31) + getStringHashCode(this._description) | 0;
    return result;
  };
  EvaluationResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EvaluationResult))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof EvaluationResult ? other : THROW_CCE();
    if (!this._variant.equals(tmp0_other_with_cast._variant))
      return false;
    if (!(this._description === tmp0_other_with_cast._description))
      return false;
    return true;
  };
  EvaluationResult.$metadata$ = {
    simpleName: 'EvaluationResult',
    kind: 'class',
    interfaces: []
  };
  function convertFlagUserProperty(flag) {
    var tmp;
    if (flag._userProperty == null) {
      tmp = null;
    } else {
      tmp = 'gp:' + flag._userProperty;
    }
    return tmp;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.amplitude.experiment.evaluation.FlagConfig', this, 18);
    tmp0_serialDesc.addElement_0('flagKey', false);
    tmp0_serialDesc.addElement_0('flagName', false);
    tmp0_serialDesc.addElement_0('flagVersion', true);
    tmp0_serialDesc.addElement_0('enabled', true);
    tmp0_serialDesc.addElement_0('bucketingKey', true);
    tmp0_serialDesc.addElement_0('bucketingSalt', true);
    tmp0_serialDesc.addElement_0('useStickyBucketing', true);
    tmp0_serialDesc.addElement_0('globalHoldbackSalt', true);
    tmp0_serialDesc.addElement_0('globalHoldbackPct', true);
    tmp0_serialDesc.addElement_0('mutualExclusionConfig', true);
    tmp0_serialDesc.addElement_0('defaultValue', true);
    tmp0_serialDesc.addElement_0('variants', false);
    tmp0_serialDesc.addElement_0('variantsExclusions', false);
    tmp0_serialDesc.addElement_0('variantsInclusions', false);
    tmp0_serialDesc.addElement_0('allUsersTargetingConfig', false);
    tmp0_serialDesc.addElement_0('customSegmentTargetingConfigs', false);
    tmp0_serialDesc.addElement_0('userProperty', false);
    tmp0_serialDesc.addElement_0('globalHoldbackBucketingKey', true);
    this._descriptor_33 = tmp0_serialDesc;
  }
  $serializer_0.prototype._get_descriptor__57 = function () {
    return this._descriptor_33;
  };
  $serializer_0.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance(), BooleanSerializer_getInstance(), StringSerializer_getInstance(), new NullableSerializer(StringSerializer_getInstance()), BooleanSerializer_getInstance(), new NullableSerializer(StringSerializer_getInstance()), IntSerializer_getInstance(), new NullableSerializer($serializer_getInstance_2()), new NullableSerializer(StringSerializer_getInstance()), new ArrayListSerializer($serializer_getInstance_5()), new NullableSerializer(new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance()))), new NullableSerializer(new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance()))), $serializer_getInstance_3(), new NullableSerializer(new ArrayListSerializer($serializer_getInstance_3())), new NullableSerializer(StringSerializer_getInstance()), StringSerializer_getInstance()];
    return tmp0_arrayOf_0;
  };
  $serializer_0.prototype.deserialize_61 = function (decoder) {
    var tmp0_desc = this._descriptor_33;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_local3 = false;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_local7 = null;
    var tmp12_local8 = 0;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_input = decoder.beginStructure_11(tmp0_desc);
    if (tmp22_input.decodeSequentially_8()) {
      tmp4_local0 = tmp22_input.decodeStringElement_8(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.decodeStringElement_8(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.decodeIntElement_8(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.decodeBooleanElement_8(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.decodeStringElement_8(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.decodeBooleanElement_8(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.decodeIntElement_8(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 9, $serializer_getInstance_2(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.decodeSerializableElement_8(tmp0_desc, 11, new ArrayListSerializer($serializer_getInstance_5()), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 12, new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance())), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 13, new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance())), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.decodeSerializableElement_8(tmp0_desc, 14, $serializer_getInstance_3(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 15, new ArrayListSerializer($serializer_getInstance_3()), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.decodeStringElement_8(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.decodeElementIndex_8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.decodeStringElement_8(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.decodeStringElement_8(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.decodeIntElement_8(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.decodeBooleanElement_8(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.decodeStringElement_8(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.decodeBooleanElement_8(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.decodeIntElement_8(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 9, $serializer_getInstance_2(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.decodeSerializableElement_8(tmp0_desc, 11, new ArrayListSerializer($serializer_getInstance_5()), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 12, new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance())), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 13, new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance())), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.decodeSerializableElement_8(tmp0_desc, 14, $serializer_getInstance_3(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 15, new ArrayListSerializer($serializer_getInstance_3()), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.decodeNullableSerializableElement_8(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.decodeStringElement_8(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp22_input.endStructure_11(tmp0_desc);
    return FlagConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  };
  $serializer_0.prototype.serialize_78 = function (encoder, value) {
    var tmp0_desc = this._descriptor_33;
    var tmp1_output = encoder.beginStructure_11(tmp0_desc);
    tmp1_output.encodeStringElement_1(tmp0_desc, 0, value._flagKey);
    tmp1_output.encodeStringElement_1(tmp0_desc, 1, value._flagName);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 2) ? true : !(value._flagVersion === 0))
      tmp1_output.encodeIntElement_1(tmp0_desc, 2, value._flagVersion);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 3) ? true : !(value._enabled === false))
      tmp1_output.encodeBooleanElement_1(tmp0_desc, 3, value._enabled);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 4) ? true : !(value._bucketingKey === 'amplitude_id'))
      tmp1_output.encodeStringElement_1(tmp0_desc, 4, value._bucketingKey);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 5) ? true : !(value._bucketingSalt == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 5, StringSerializer_getInstance(), value._bucketingSalt);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 6) ? true : !(value._useStickyBucketing === false))
      tmp1_output.encodeBooleanElement_1(tmp0_desc, 6, value._useStickyBucketing);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 7) ? true : !(value._globalHoldbackSalt == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 7, StringSerializer_getInstance(), value._globalHoldbackSalt);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 8) ? true : !(value._globalHoldbackPct === 0))
      tmp1_output.encodeIntElement_1(tmp0_desc, 8, value._globalHoldbackPct);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 9) ? true : !(value._mutualExclusionConfig == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 9, $serializer_getInstance_2(), value._mutualExclusionConfig);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 10) ? true : !(value._defaultValue == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 10, StringSerializer_getInstance(), value._defaultValue);
    tmp1_output.encodeSerializableElement_1(tmp0_desc, 11, new ArrayListSerializer($serializer_getInstance_5()), value._variants);
    tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 12, new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance())), value._variantsExclusions);
    tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 13, new LinkedHashMapSerializer(StringSerializer_getInstance(), new LinkedHashSetSerializer(StringSerializer_getInstance())), value._variantsInclusions);
    tmp1_output.encodeSerializableElement_1(tmp0_desc, 14, $serializer_getInstance_3(), value._allUsersTargetingConfig);
    tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 15, new ArrayListSerializer($serializer_getInstance_3()), value._customSegmentTargetingConfigs);
    tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 16, StringSerializer_getInstance(), value._userProperty);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 17) ? true : !(value._globalHoldbackBucketingKey === 'amplitude_id'))
      tmp1_output.encodeStringElement_1(tmp0_desc, 17, value._globalHoldbackBucketingKey);
    tmp1_output.endStructure_11(tmp0_desc);
  };
  $serializer_0.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_78(encoder, value instanceof FlagConfig ? value : THROW_CCE());
  };
  $serializer_0.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function FlagConfig_init_$Init$(seen1, flagKey, flagName, flagVersion, enabled, bucketingKey, bucketingSalt, useStickyBucketing, globalHoldbackSalt, globalHoldbackPct, mutualExclusionConfig, defaultValue, variants, variantsExclusions, variantsInclusions, allUsersTargetingConfig, customSegmentTargetingConfigs, userProperty, globalHoldbackBucketingKey, serializationConstructorMarker, $this) {
    if (0 === (seen1 & 1))
      throw MissingFieldException_init_$Create$('flagKey');
    else
      $this._flagKey = flagKey;
    if (0 === (seen1 & 2))
      throw MissingFieldException_init_$Create$('flagName');
    else
      $this._flagName = flagName;
    if (0 === (seen1 & 4))
      $this._flagVersion = 0;
    else
      $this._flagVersion = flagVersion;
    if (0 === (seen1 & 8))
      $this._enabled = false;
    else
      $this._enabled = enabled;
    if (0 === (seen1 & 16))
      $this._bucketingKey = 'amplitude_id';
    else
      $this._bucketingKey = bucketingKey;
    if (0 === (seen1 & 32))
      $this._bucketingSalt = null;
    else
      $this._bucketingSalt = bucketingSalt;
    if (0 === (seen1 & 64))
      $this._useStickyBucketing = false;
    else
      $this._useStickyBucketing = useStickyBucketing;
    if (0 === (seen1 & 128))
      $this._globalHoldbackSalt = null;
    else
      $this._globalHoldbackSalt = globalHoldbackSalt;
    if (0 === (seen1 & 256))
      $this._globalHoldbackPct = 0;
    else
      $this._globalHoldbackPct = globalHoldbackPct;
    if (0 === (seen1 & 512))
      $this._mutualExclusionConfig = null;
    else
      $this._mutualExclusionConfig = mutualExclusionConfig;
    if (0 === (seen1 & 1024))
      $this._defaultValue = null;
    else
      $this._defaultValue = defaultValue;
    if (0 === (seen1 & 2048))
      throw MissingFieldException_init_$Create$('variants');
    else
      $this._variants = variants;
    if (0 === (seen1 & 4096))
      throw MissingFieldException_init_$Create$('variantsExclusions');
    else
      $this._variantsExclusions = variantsExclusions;
    if (0 === (seen1 & 8192))
      throw MissingFieldException_init_$Create$('variantsInclusions');
    else
      $this._variantsInclusions = variantsInclusions;
    if (0 === (seen1 & 16384))
      throw MissingFieldException_init_$Create$('allUsersTargetingConfig');
    else
      $this._allUsersTargetingConfig = allUsersTargetingConfig;
    if (0 === (seen1 & 32768))
      throw MissingFieldException_init_$Create$('customSegmentTargetingConfigs');
    else
      $this._customSegmentTargetingConfigs = customSegmentTargetingConfigs;
    if (0 === (seen1 & 65536))
      throw MissingFieldException_init_$Create$('userProperty');
    else
      $this._userProperty = userProperty;
    if (0 === (seen1 & 131072))
      $this._globalHoldbackBucketingKey = 'amplitude_id';
    else
      $this._globalHoldbackBucketingKey = globalHoldbackBucketingKey;
    return $this;
  }
  function FlagConfig_init_$Create$(seen1, flagKey, flagName, flagVersion, enabled, bucketingKey, bucketingSalt, useStickyBucketing, globalHoldbackSalt, globalHoldbackPct, mutualExclusionConfig, defaultValue, variants, variantsExclusions, variantsInclusions, allUsersTargetingConfig, customSegmentTargetingConfigs, userProperty, globalHoldbackBucketingKey, serializationConstructorMarker) {
    return FlagConfig_init_$Init$(seen1, flagKey, flagName, flagVersion, enabled, bucketingKey, bucketingSalt, useStickyBucketing, globalHoldbackSalt, globalHoldbackPct, mutualExclusionConfig, defaultValue, variants, variantsExclusions, variantsInclusions, allUsersTargetingConfig, customSegmentTargetingConfigs, userProperty, globalHoldbackBucketingKey, serializationConstructorMarker, Object.create(FlagConfig.prototype));
  }
  function FlagConfig() {
  }
  FlagConfig.prototype.toString = function () {
    return '' + 'FlagConfig(flagKey=' + this._flagKey + ', flagName=' + this._flagName + ', flagVersion=' + this._flagVersion + ', enabled=' + this._enabled + ', bucketingKey=' + this._bucketingKey + ', bucketingSalt=' + this._bucketingSalt + ', useStickyBucketing=' + this._useStickyBucketing + ', globalHoldbackSalt=' + this._globalHoldbackSalt + ', globalHoldbackPct=' + this._globalHoldbackPct + ', mutualExclusionConfig=' + this._mutualExclusionConfig + ', defaultValue=' + this._defaultValue + ', variants=' + this._variants + ', variantsExclusions=' + this._variantsExclusions + ', variantsInclusions=' + this._variantsInclusions + ', allUsersTargetingConfig=' + this._allUsersTargetingConfig + ', customSegmentTargetingConfigs=' + this._customSegmentTargetingConfigs + ', userProperty=' + this._userProperty + ')';
  };
  FlagConfig.prototype.hashCode = function () {
    var result = getStringHashCode(this._flagKey);
    result = imul(result, 31) + getStringHashCode(this._flagName) | 0;
    result = imul(result, 31) + this._flagVersion | 0;
    result = imul(result, 31) + (this._enabled | 0) | 0;
    result = imul(result, 31) + getStringHashCode(this._bucketingKey) | 0;
    result = imul(result, 31) + (this._bucketingSalt == null ? 0 : getStringHashCode(this._bucketingSalt)) | 0;
    result = imul(result, 31) + (this._useStickyBucketing | 0) | 0;
    result = imul(result, 31) + (this._globalHoldbackSalt == null ? 0 : getStringHashCode(this._globalHoldbackSalt)) | 0;
    result = imul(result, 31) + this._globalHoldbackPct | 0;
    result = imul(result, 31) + (this._mutualExclusionConfig == null ? 0 : this._mutualExclusionConfig.hashCode()) | 0;
    result = imul(result, 31) + (this._defaultValue == null ? 0 : getStringHashCode(this._defaultValue)) | 0;
    result = imul(result, 31) + hashCode(this._variants) | 0;
    result = imul(result, 31) + (this._variantsExclusions == null ? 0 : hashCode(this._variantsExclusions)) | 0;
    result = imul(result, 31) + (this._variantsInclusions == null ? 0 : hashCode(this._variantsInclusions)) | 0;
    result = imul(result, 31) + this._allUsersTargetingConfig.hashCode() | 0;
    result = imul(result, 31) + (this._customSegmentTargetingConfigs == null ? 0 : hashCode(this._customSegmentTargetingConfigs)) | 0;
    result = imul(result, 31) + (this._userProperty == null ? 0 : getStringHashCode(this._userProperty)) | 0;
    return result;
  };
  FlagConfig.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlagConfig))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FlagConfig ? other : THROW_CCE();
    if (!(this._flagKey === tmp0_other_with_cast._flagKey))
      return false;
    if (!(this._flagName === tmp0_other_with_cast._flagName))
      return false;
    if (!(this._flagVersion === tmp0_other_with_cast._flagVersion))
      return false;
    if (!(this._enabled === tmp0_other_with_cast._enabled))
      return false;
    if (!(this._bucketingKey === tmp0_other_with_cast._bucketingKey))
      return false;
    if (!(this._bucketingSalt == tmp0_other_with_cast._bucketingSalt))
      return false;
    if (!(this._useStickyBucketing === tmp0_other_with_cast._useStickyBucketing))
      return false;
    if (!(this._globalHoldbackSalt == tmp0_other_with_cast._globalHoldbackSalt))
      return false;
    if (!(this._globalHoldbackPct === tmp0_other_with_cast._globalHoldbackPct))
      return false;
    if (!equals_1(this._mutualExclusionConfig, tmp0_other_with_cast._mutualExclusionConfig))
      return false;
    if (!(this._defaultValue == tmp0_other_with_cast._defaultValue))
      return false;
    if (!equals_1(this._variants, tmp0_other_with_cast._variants))
      return false;
    if (!equals_1(this._variantsExclusions, tmp0_other_with_cast._variantsExclusions))
      return false;
    if (!equals_1(this._variantsInclusions, tmp0_other_with_cast._variantsInclusions))
      return false;
    if (!this._allUsersTargetingConfig.equals(tmp0_other_with_cast._allUsersTargetingConfig))
      return false;
    if (!equals_1(this._customSegmentTargetingConfigs, tmp0_other_with_cast._customSegmentTargetingConfigs))
      return false;
    if (!(this._userProperty == tmp0_other_with_cast._userProperty))
      return false;
    return true;
  };
  FlagConfig.$metadata$ = {
    simpleName: 'FlagConfig',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance_0}
  };
  function getFullyRolledOutVariantIfPresent(_this_) {
    var tmp0_sumOf_0 = _this_._allUsersTargetingConfig._allocations;
    var sum_1 = 0;
    var tmp0_iterator_2 = tmp0_sumOf_0.iterator_38();
    while (tmp0_iterator_2.hasNext_13()) {
      var element_3 = tmp0_iterator_2.next_13();
      var tmp = sum_1;
      sum_1 = tmp + element_3._percentage | 0;
    }
    var totalAllocationPercentage = sum_1;
    if (totalAllocationPercentage < 10000) {
      return null;
    }if (_this_._variants._get_size__28() === 1) {
      return _this_._variants.get_28(0);
    }var tmp0_elvis_lhs = _this_._allUsersTargetingConfig._allocations.get_28(0)._weights;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var weights = tmp_0;
    var fullyRolledOutVariant = null;
    var variantsWithWeights = 0;
    var tmp1_iterator = _this_._variants.iterator_38();
    while (tmp1_iterator.hasNext_13()) {
      var variant = tmp1_iterator.next_13();
      var tmp1_get_0 = variant._key_1;
      var tmp2_elvis_lhs = (isInterface(weights, Map_0) ? weights : THROW_CCE()).get_16(tmp1_get_0);
      if ((tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) > 0) {
        fullyRolledOutVariant = variant;
        var tmp3 = variantsWithWeights;
        variantsWithWeights = tmp3 + 1 | 0;
        Unit_getInstance();
      } else {
      }
    }
    if (variantsWithWeights === 1) {
      return fullyRolledOutVariant;
    }return null;
  }
  function FlagResult_init_$Init$(flagConfig, evaluationResult, $this) {
    FlagResult.call($this, evaluationResult._variant, evaluationResult._description, flagConfig._defaultValue == evaluationResult._variant._key_1);
    return $this;
  }
  function FlagResult_init_$Create$(flagConfig, evaluationResult) {
    return FlagResult_init_$Init$(flagConfig, evaluationResult, Object.create(FlagResult.prototype));
  }
  function Companion_19() {
    Companion_instance_18 = this;
  }
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_19();
    return Companion_instance_18;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.amplitude.experiment.evaluation.FlagResult', this, 3);
    tmp0_serialDesc.addElement_0('variant', false);
    tmp0_serialDesc.addElement_0('description', false);
    tmp0_serialDesc.addElement_0('isDefaultVariant', false);
    this._descriptor_34 = tmp0_serialDesc;
  }
  $serializer_1.prototype._get_descriptor__57 = function () {
    return this._descriptor_34;
  };
  $serializer_1.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [$serializer_getInstance_5(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
    return tmp0_arrayOf_0;
  };
  $serializer_1.prototype.deserialize_61 = function (decoder) {
    var tmp0_desc = this._descriptor_34;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.beginStructure_11(tmp0_desc);
    if (tmp7_input.decodeSequentially_8()) {
      tmp4_local0 = tmp7_input.decodeSerializableElement_8(tmp0_desc, 0, $serializer_getInstance_5(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_8(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeBooleanElement_8(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeSerializableElement_8(tmp0_desc, 0, $serializer_getInstance_5(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_8(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeBooleanElement_8(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_11(tmp0_desc);
    return FlagResult_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_1.prototype.serialize_80 = function (encoder, value) {
    var tmp0_desc = this._descriptor_34;
    var tmp1_output = encoder.beginStructure_11(tmp0_desc);
    tmp1_output.encodeSerializableElement_1(tmp0_desc, 0, $serializer_getInstance_5(), value._variant_0);
    tmp1_output.encodeStringElement_1(tmp0_desc, 1, value._description_0);
    tmp1_output.encodeBooleanElement_1(tmp0_desc, 2, value._isDefaultVariant);
    tmp1_output.endStructure_11(tmp0_desc);
  };
  $serializer_1.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_80(encoder, value instanceof FlagResult ? value : THROW_CCE());
  };
  $serializer_1.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function FlagResult_init_$Init$_0(seen1, variant, description, isDefaultVariant, serializationConstructorMarker, $this) {
    if (0 === (seen1 & 1))
      throw MissingFieldException_init_$Create$('variant');
    else
      $this._variant_0 = variant;
    if (0 === (seen1 & 2))
      throw MissingFieldException_init_$Create$('description');
    else
      $this._description_0 = description;
    if (0 === (seen1 & 4))
      throw MissingFieldException_init_$Create$('isDefaultVariant');
    else
      $this._isDefaultVariant = isDefaultVariant;
    return $this;
  }
  function FlagResult_init_$Create$_0(seen1, variant, description, isDefaultVariant, serializationConstructorMarker) {
    return FlagResult_init_$Init$_0(seen1, variant, description, isDefaultVariant, serializationConstructorMarker, Object.create(FlagResult.prototype));
  }
  function FlagResult(variant, description, isDefaultVariant) {
    Companion_getInstance_18();
    this._variant_0 = variant;
    this._description_0 = description;
    this._isDefaultVariant = isDefaultVariant;
  }
  FlagResult.prototype.toString = function () {
    return '' + 'FlagResult(variant=' + this._variant_0 + ', description=' + this._description_0 + ', isDefaultVariant=' + this._isDefaultVariant + ')';
  };
  FlagResult.prototype.hashCode = function () {
    var result = this._variant_0.hashCode();
    result = imul(result, 31) + getStringHashCode(this._description_0) | 0;
    result = imul(result, 31) + (this._isDefaultVariant | 0) | 0;
    return result;
  };
  FlagResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlagResult))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof FlagResult ? other : THROW_CCE();
    if (!this._variant_0.equals(tmp0_other_with_cast._variant_0))
      return false;
    if (!(this._description_0 === tmp0_other_with_cast._description_0))
      return false;
    if (!(this._isDefaultVariant === tmp0_other_with_cast._isDefaultVariant))
      return false;
    return true;
  };
  FlagResult.$metadata$ = {
    simpleName: 'FlagResult',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance_1}
  };
  function Logger() {
    Logger_instance = this;
    this._debug = true;
    this._tag = 'Evaluation';
  }
  Logger.prototype.d = function (msg) {
    if (this._debug) {
      println('' + 'DEBUG [' + this._tag + '] ' + msg);
    }};
  Logger.prototype.w_0 = function (msg, e) {
    if (e == null) {
      println('' + 'WARN [' + this._tag + '] ' + msg);
    } else {
      printStackTrace(e);
      println('' + 'WARN [' + this._tag + '] ' + msg + '\n' + Unit_getInstance());
    }
  };
  Logger.$metadata$ = {
    simpleName: 'Logger',
    kind: 'object',
    interfaces: [ILogger]
  };
  var Logger_instance;
  function Logger_getInstance() {
    if (Logger_instance == null)
      new Logger();
    return Logger_instance;
  }
  function ILogger() {
  }
  ILogger.prototype.w$default_0 = function (msg, e, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      e = null;
    return $handler == null ? this.w_0(msg, e) : $handler(msg, e);
  };
  ILogger.$metadata$ = {
    simpleName: 'ILogger',
    kind: 'interface',
    interfaces: []
  };
  function mix32($this, k, hash) {
    var kResult = k;
    var hashResult = hash;
    kResult = imul(kResult, -862048943);
    kResult = rotateLeft(kResult, 15);
    kResult = imul(kResult, 461845907);
    hashResult = hashResult ^ kResult;
    return imul(rotateLeft(hashResult, 13), 5) + -430675100 | 0;
  }
  function fmix32($this, hash) {
    var hashResult = hash;
    hashResult = hashResult ^ hashResult >>> 16;
    hashResult = imul(hashResult, -2048144789);
    hashResult = hashResult ^ hashResult >>> 13;
    hashResult = imul(hashResult, -1028477387);
    hashResult = hashResult ^ hashResult >>> 16;
    return hashResult;
  }
  function Murmur3() {
    Murmur3_instance = this;
    this._C1_32 = -862048943;
    this._C2_32 = 461845907;
    this._R1_32 = 15;
    this._R2_32 = 13;
    this._M_32 = 5;
    this._N_32 = -430675100;
  }
  Murmur3.prototype.hash32x86 = function (data, length, seed) {
    var hash = seed;
    var nblocks = length >> 2;
    var inductionVariable = 0;
    if (inductionVariable < nblocks)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var index = i << 2;
        var k = readIntLe(data, index);
        hash = mix32(this, k, hash);
      }
       while (inductionVariable < nblocks);
    var index_0 = nblocks << 2;
    var k1 = 0;
    var tmp1_subject = length - index_0 | 0;
    switch (tmp1_subject) {
      case 3:
        k1 = k1 ^ (data[index_0 + 2 | 0] & 255) << 16;
        k1 = k1 ^ (data[index_0 + 1 | 0] & 255) << 8;
        k1 = k1 ^ data[index_0] & 255;
        k1 = imul(k1, -862048943);
        k1 = rotateLeft(k1, 15);
        k1 = imul(k1, 461845907);
        hash = hash ^ k1;
        break;
      case 2:
        k1 = k1 ^ (data[index_0 + 1 | 0] & 255) << 8;
        k1 = k1 ^ data[index_0] & 255;
        k1 = imul(k1, -862048943);
        k1 = rotateLeft(k1, 15);
        k1 = imul(k1, 461845907);
        hash = hash ^ k1;
        break;
      case 1:
        k1 = k1 ^ data[index_0] & 255;
        k1 = imul(k1, -862048943);
        k1 = rotateLeft(k1, 15);
        k1 = imul(k1, 461845907);
        hash = hash ^ k1;
        break;
    }
    hash = hash ^ length;
    return fmix32(this, hash);
  };
  Murmur3.$metadata$ = {
    simpleName: 'Murmur3',
    kind: 'object',
    interfaces: []
  };
  var Murmur3_instance;
  function Murmur3_getInstance() {
    if (Murmur3_instance == null)
      new Murmur3();
    return Murmur3_instance;
  }
  function readIntLe(_this_, index) {
    return reverseBytes((_this_[index] & 255) << 24 | (_this_[index + 1 | 0] & 255) << 16 | (_this_[index + 2 | 0] & 255) << 8 | _this_[index + 3 | 0] & 255);
  }
  function reverseBytes(_this_) {
    return (_this_ & -16777216) >>> 24 | (_this_ & 16711680) >>> 8 | (_this_ & 65280) << 8 | (_this_ & 255) << 24;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.amplitude.experiment.evaluation.MutualExclusionConfig', this, 4);
    tmp0_serialDesc.addElement_0('groupSalt', false);
    tmp0_serialDesc.addElement_0('lowerBound', false);
    tmp0_serialDesc.addElement_0('percentage', false);
    tmp0_serialDesc.addElement_0('bucketingKey', true);
    this._descriptor_35 = tmp0_serialDesc;
  }
  $serializer_2.prototype._get_descriptor__57 = function () {
    return this._descriptor_35;
  };
  $serializer_2.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance()];
    return tmp0_arrayOf_0;
  };
  $serializer_2.prototype.deserialize_61 = function (decoder) {
    var tmp0_desc = this._descriptor_35;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_11(tmp0_desc);
    if (tmp8_input.decodeSequentially_8()) {
      tmp4_local0 = tmp8_input.decodeStringElement_8(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeIntElement_8(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeIntElement_8(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeStringElement_8(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeStringElement_8(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeIntElement_8(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeIntElement_8(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeStringElement_8(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_11(tmp0_desc);
    return MutualExclusionConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  $serializer_2.prototype.serialize_82 = function (encoder, value) {
    var tmp0_desc = this._descriptor_35;
    var tmp1_output = encoder.beginStructure_11(tmp0_desc);
    tmp1_output.encodeStringElement_1(tmp0_desc, 0, value._groupSalt);
    tmp1_output.encodeIntElement_1(tmp0_desc, 1, value._lowerBound);
    tmp1_output.encodeIntElement_1(tmp0_desc, 2, value._percentage_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 3) ? true : !(value._bucketingKey_0 === 'amplitude_id'))
      tmp1_output.encodeStringElement_1(tmp0_desc, 3, value._bucketingKey_0);
    tmp1_output.endStructure_11(tmp0_desc);
  };
  $serializer_2.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_82(encoder, value instanceof MutualExclusionConfig ? value : THROW_CCE());
  };
  $serializer_2.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function MutualExclusionConfig_init_$Init$(seen1, groupSalt, lowerBound, percentage, bucketingKey, serializationConstructorMarker, $this) {
    if (0 === (seen1 & 1))
      throw MissingFieldException_init_$Create$('groupSalt');
    else
      $this._groupSalt = groupSalt;
    if (0 === (seen1 & 2))
      throw MissingFieldException_init_$Create$('lowerBound');
    else
      $this._lowerBound = lowerBound;
    if (0 === (seen1 & 4))
      throw MissingFieldException_init_$Create$('percentage');
    else
      $this._percentage_0 = percentage;
    if (0 === (seen1 & 8))
      $this._bucketingKey_0 = 'amplitude_id';
    else
      $this._bucketingKey_0 = bucketingKey;
    return $this;
  }
  function MutualExclusionConfig_init_$Create$(seen1, groupSalt, lowerBound, percentage, bucketingKey, serializationConstructorMarker) {
    return MutualExclusionConfig_init_$Init$(seen1, groupSalt, lowerBound, percentage, bucketingKey, serializationConstructorMarker, Object.create(MutualExclusionConfig.prototype));
  }
  function MutualExclusionConfig() {
  }
  MutualExclusionConfig.prototype.toString = function () {
    return '' + 'MutualExclusionConfig(groupSalt=' + this._groupSalt + ', lowerBound=' + this._lowerBound + ', percentage=' + this._percentage_0 + ', bucketingKey=' + this._bucketingKey_0 + ')';
  };
  MutualExclusionConfig.prototype.hashCode = function () {
    var result = getStringHashCode(this._groupSalt);
    result = imul(result, 31) + this._lowerBound | 0;
    result = imul(result, 31) + this._percentage_0 | 0;
    result = imul(result, 31) + getStringHashCode(this._bucketingKey_0) | 0;
    return result;
  };
  MutualExclusionConfig.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutualExclusionConfig))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof MutualExclusionConfig ? other : THROW_CCE();
    if (!(this._groupSalt === tmp0_other_with_cast._groupSalt))
      return false;
    if (!(this._lowerBound === tmp0_other_with_cast._lowerBound))
      return false;
    if (!(this._percentage_0 === tmp0_other_with_cast._percentage_0))
      return false;
    if (!(this._bucketingKey_0 === tmp0_other_with_cast._bucketingKey_0))
      return false;
    return true;
  };
  MutualExclusionConfig.$metadata$ = {
    simpleName: 'MutualExclusionConfig',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance_2}
  };
  var Operator_IS_instance;
  var Operator_IS_NOT_instance;
  var Operator_CONTAINS_instance;
  var Operator_DOES_NOT_CONTAIN_instance;
  var Operator_LESS_THAN_instance;
  var Operator_LESS_THAN_EQUALS_instance;
  var Operator_GREATER_THAN_instance;
  var Operator_GREATER_THAN_EQUALS_instance;
  var Operator_SET_IS_instance;
  var Operator_SET_IS_NOT_instance;
  var Operator_CSS_MATCH_instance;
  var Operator_GLOB_MATCH_instance;
  var Operator_SET_CONTAINS_instance;
  var Operator_SET_DOES_NOT_CONTAIN_instance;
  var Operator_GLOB_DOES_NOT_MATCH_instance;
  var Operator_VERSION_LESS_THAN_instance;
  var Operator_VERSION_LESS_THAN_EQUALS_instance;
  var Operator_VERSION_GREATER_THAN_instance;
  var Operator_VERSION_GREATER_THAN_EQUALS_instance;
  var Operator_HAS_PREFIX_instance;
  function values_0() {
    return [Operator_IS_getInstance(), Operator_IS_NOT_getInstance(), Operator_CONTAINS_getInstance(), Operator_DOES_NOT_CONTAIN_getInstance(), Operator_LESS_THAN_getInstance(), Operator_LESS_THAN_EQUALS_getInstance(), Operator_GREATER_THAN_getInstance(), Operator_GREATER_THAN_EQUALS_getInstance(), Operator_SET_IS_getInstance(), Operator_SET_IS_NOT_getInstance(), Operator_CSS_MATCH_getInstance(), Operator_GLOB_MATCH_getInstance(), Operator_SET_CONTAINS_getInstance(), Operator_SET_DOES_NOT_CONTAIN_getInstance(), Operator_GLOB_DOES_NOT_MATCH_getInstance(), Operator_VERSION_LESS_THAN_getInstance(), Operator_VERSION_LESS_THAN_EQUALS_getInstance(), Operator_VERSION_GREATER_THAN_getInstance(), Operator_VERSION_GREATER_THAN_EQUALS_getInstance(), Operator_HAS_PREFIX_getInstance()];
  }
  var Operator_entriesInitialized;
  function Operator_initEntries() {
    if (Operator_entriesInitialized)
      return Unit_getInstance();
    Operator_entriesInitialized = true;
    Operator_IS_instance = new Operator('IS', 0, 1);
    Operator_IS_NOT_instance = new Operator('IS_NOT', 1, 2);
    Operator_CONTAINS_instance = new Operator('CONTAINS', 2, 3);
    Operator_DOES_NOT_CONTAIN_instance = new Operator('DOES_NOT_CONTAIN', 3, 4);
    Operator_LESS_THAN_instance = new Operator('LESS_THAN', 4, 5);
    Operator_LESS_THAN_EQUALS_instance = new Operator('LESS_THAN_EQUALS', 5, 6);
    Operator_GREATER_THAN_instance = new Operator('GREATER_THAN', 6, 7);
    Operator_GREATER_THAN_EQUALS_instance = new Operator('GREATER_THAN_EQUALS', 7, 8);
    Operator_SET_IS_instance = new Operator('SET_IS', 8, 9);
    Operator_SET_IS_NOT_instance = new Operator('SET_IS_NOT', 9, 10);
    Operator_CSS_MATCH_instance = new Operator('CSS_MATCH', 10, 11);
    Operator_GLOB_MATCH_instance = new Operator('GLOB_MATCH', 11, 12);
    Operator_SET_CONTAINS_instance = new Operator('SET_CONTAINS', 12, 13);
    Operator_SET_DOES_NOT_CONTAIN_instance = new Operator('SET_DOES_NOT_CONTAIN', 13, 14);
    Operator_GLOB_DOES_NOT_MATCH_instance = new Operator('GLOB_DOES_NOT_MATCH', 14, 15);
    Operator_VERSION_LESS_THAN_instance = new Operator('VERSION_LESS_THAN', 15, 16);
    Operator_VERSION_LESS_THAN_EQUALS_instance = new Operator('VERSION_LESS_THAN_EQUALS', 16, 17);
    Operator_VERSION_GREATER_THAN_instance = new Operator('VERSION_GREATER_THAN', 17, 18);
    Operator_VERSION_GREATER_THAN_EQUALS_instance = new Operator('VERSION_GREATER_THAN_EQUALS', 18, 19);
    Operator_HAS_PREFIX_instance = new Operator('HAS_PREFIX', 19, 20);
  }
  function Operator(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this._value_6 = value;
  }
  Operator.$metadata$ = {
    simpleName: 'Operator',
    kind: 'class',
    interfaces: []
  };
  function Operator_IS_getInstance() {
    Operator_initEntries();
    return Operator_IS_instance;
  }
  function Operator_IS_NOT_getInstance() {
    Operator_initEntries();
    return Operator_IS_NOT_instance;
  }
  function Operator_CONTAINS_getInstance() {
    Operator_initEntries();
    return Operator_CONTAINS_instance;
  }
  function Operator_DOES_NOT_CONTAIN_getInstance() {
    Operator_initEntries();
    return Operator_DOES_NOT_CONTAIN_instance;
  }
  function Operator_LESS_THAN_getInstance() {
    Operator_initEntries();
    return Operator_LESS_THAN_instance;
  }
  function Operator_LESS_THAN_EQUALS_getInstance() {
    Operator_initEntries();
    return Operator_LESS_THAN_EQUALS_instance;
  }
  function Operator_GREATER_THAN_getInstance() {
    Operator_initEntries();
    return Operator_GREATER_THAN_instance;
  }
  function Operator_GREATER_THAN_EQUALS_getInstance() {
    Operator_initEntries();
    return Operator_GREATER_THAN_EQUALS_instance;
  }
  function Operator_SET_IS_getInstance() {
    Operator_initEntries();
    return Operator_SET_IS_instance;
  }
  function Operator_SET_IS_NOT_getInstance() {
    Operator_initEntries();
    return Operator_SET_IS_NOT_instance;
  }
  function Operator_CSS_MATCH_getInstance() {
    Operator_initEntries();
    return Operator_CSS_MATCH_instance;
  }
  function Operator_GLOB_MATCH_getInstance() {
    Operator_initEntries();
    return Operator_GLOB_MATCH_instance;
  }
  function Operator_SET_CONTAINS_getInstance() {
    Operator_initEntries();
    return Operator_SET_CONTAINS_instance;
  }
  function Operator_SET_DOES_NOT_CONTAIN_getInstance() {
    Operator_initEntries();
    return Operator_SET_DOES_NOT_CONTAIN_instance;
  }
  function Operator_GLOB_DOES_NOT_MATCH_getInstance() {
    Operator_initEntries();
    return Operator_GLOB_DOES_NOT_MATCH_instance;
  }
  function Operator_VERSION_LESS_THAN_getInstance() {
    Operator_initEntries();
    return Operator_VERSION_LESS_THAN_instance;
  }
  function Operator_VERSION_LESS_THAN_EQUALS_getInstance() {
    Operator_initEntries();
    return Operator_VERSION_LESS_THAN_EQUALS_instance;
  }
  function Operator_VERSION_GREATER_THAN_getInstance() {
    Operator_initEntries();
    return Operator_VERSION_GREATER_THAN_instance;
  }
  function Operator_VERSION_GREATER_THAN_EQUALS_getInstance() {
    Operator_initEntries();
    return Operator_VERSION_GREATER_THAN_EQUALS_instance;
  }
  function Operator_HAS_PREFIX_getInstance() {
    Operator_initEntries();
    return Operator_HAS_PREFIX_instance;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.amplitude.experiment.evaluation.SegmentTargetingConfig', this, 4);
    tmp0_serialDesc.addElement_0('name', false);
    tmp0_serialDesc.addElement_0('conditions', false);
    tmp0_serialDesc.addElement_0('allocations', false);
    tmp0_serialDesc.addElement_0('bucketingKey', false);
    this._descriptor_36 = tmp0_serialDesc;
  }
  $serializer_3.prototype._get_descriptor__57 = function () {
    return this._descriptor_36;
  };
  $serializer_3.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [StringSerializer_getInstance(), new ArrayListSerializer($serializer_getInstance_4()), new ArrayListSerializer($serializer_getInstance()), StringSerializer_getInstance()];
    return tmp0_arrayOf_0;
  };
  $serializer_3.prototype.deserialize_61 = function (decoder) {
    var tmp0_desc = this._descriptor_36;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_11(tmp0_desc);
    if (tmp8_input.decodeSequentially_8()) {
      tmp4_local0 = tmp8_input.decodeStringElement_8(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeSerializableElement_8(tmp0_desc, 1, new ArrayListSerializer($serializer_getInstance_4()), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeSerializableElement_8(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeStringElement_8(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeStringElement_8(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeSerializableElement_8(tmp0_desc, 1, new ArrayListSerializer($serializer_getInstance_4()), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeSerializableElement_8(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeStringElement_8(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_11(tmp0_desc);
    return SegmentTargetingConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  $serializer_3.prototype.serialize_84 = function (encoder, value) {
    var tmp0_desc = this._descriptor_36;
    var tmp1_output = encoder.beginStructure_11(tmp0_desc);
    tmp1_output.encodeStringElement_1(tmp0_desc, 0, value._name_0);
    tmp1_output.encodeSerializableElement_1(tmp0_desc, 1, new ArrayListSerializer($serializer_getInstance_4()), value._conditions);
    tmp1_output.encodeSerializableElement_1(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance()), value._allocations);
    tmp1_output.encodeStringElement_1(tmp0_desc, 3, value._bucketingKey_1);
    tmp1_output.endStructure_11(tmp0_desc);
  };
  $serializer_3.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_84(encoder, value instanceof SegmentTargetingConfig ? value : THROW_CCE());
  };
  $serializer_3.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function SegmentTargetingConfig_init_$Init$(seen1, name, conditions, allocations, bucketingKey, serializationConstructorMarker, $this) {
    if (0 === (seen1 & 1))
      throw MissingFieldException_init_$Create$('name');
    else
      $this._name_0 = name;
    if (0 === (seen1 & 2))
      throw MissingFieldException_init_$Create$('conditions');
    else
      $this._conditions = conditions;
    if (0 === (seen1 & 4))
      throw MissingFieldException_init_$Create$('allocations');
    else
      $this._allocations = allocations;
    if (0 === (seen1 & 8))
      throw MissingFieldException_init_$Create$('bucketingKey');
    else
      $this._bucketingKey_1 = bucketingKey;
    return $this;
  }
  function SegmentTargetingConfig_init_$Create$(seen1, name, conditions, allocations, bucketingKey, serializationConstructorMarker) {
    return SegmentTargetingConfig_init_$Init$(seen1, name, conditions, allocations, bucketingKey, serializationConstructorMarker, Object.create(SegmentTargetingConfig.prototype));
  }
  function SegmentTargetingConfig() {
  }
  SegmentTargetingConfig.prototype.toString = function () {
    return '' + 'SegmentTargetingConfig(name=' + this._name_0 + ', conditions=' + this._conditions + ', allocations=' + this._allocations + ', bucketingKey=' + this._bucketingKey_1 + ')';
  };
  SegmentTargetingConfig.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_0);
    result = imul(result, 31) + hashCode(this._conditions) | 0;
    result = imul(result, 31) + hashCode(this._allocations) | 0;
    result = imul(result, 31) + getStringHashCode(this._bucketingKey_1) | 0;
    return result;
  };
  SegmentTargetingConfig.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SegmentTargetingConfig))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SegmentTargetingConfig ? other : THROW_CCE();
    if (!(this._name_0 === tmp0_other_with_cast._name_0))
      return false;
    if (!equals_1(this._conditions, tmp0_other_with_cast._conditions))
      return false;
    if (!equals_1(this._allocations, tmp0_other_with_cast._allocations))
      return false;
    if (!(this._bucketingKey_1 === tmp0_other_with_cast._bucketingKey_1))
      return false;
    return true;
  };
  SegmentTargetingConfig.$metadata$ = {
    simpleName: 'SegmentTargetingConfig',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance_3}
  };
  function match(_this_, user) {
    return match_0(_this_._conditions, user);
  }
  function match_0(_this_, user) {
    if (user == null) {
      return false;
    }Logger_getInstance().d('' + 'User: ' + user + ' to be matched against filters for segment: ' + _this_);
    var tmp0_iterator = _this_.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var filter = tmp0_iterator.next_13();
      if (isCohortFilter(filter)) {
        var userMatchesCohortFilter = matchesCohortUserPropFilter(user, filter);
        Logger_getInstance().d('' + 'User: ' + user + ' returned: ' + userMatchesCohortFilter + ' for cohort match for filter: ' + filter);
        if (!userMatchesCohortFilter) {
          return false;
        }} else {
        var matchFilter = new StringMatchColumnFilter(filter._prop, filter._op, filter._values_2);
        var userPropValue = getProperty(user, filter._prop);
        var tmp;
        if (userPropValue == null) {
          tmp = matchesNull(matchFilter);
        } else {
          tmp = matches_0(matchFilter, userPropValue);
        }
        var matchesFilter = tmp;
        if (!matchesFilter) {
          return false;
        }}
    }
    Logger_getInstance().d('' + 'User: ' + user + ' matches all filters for segment: ' + _this_);
    return true;
  }
  function matchesCohortUserPropFilter(_this_, userFilter) {
    var tmp0_subject = userFilter._op;
    var tmp;
    if (tmp0_subject.equals(Operator_IS_getInstance())) {
      tmp = belongsToCohort(_this_, userFilter._values_2);
    } else if (tmp0_subject.equals(Operator_IS_NOT_getInstance())) {
      tmp = !belongsToCohort(_this_, userFilter._values_2);
    } else {
      throw IllegalArgumentException_init_$Create$_0('Not supported for cohorts');
    }
    return tmp;
  }
  function belongsToCohort(_this_, filterCohortIds) {
    if (filterCohortIds.isEmpty_28()) {
      return true;
    }var tmp;
    if (_this_ == null) {
      tmp = true;
    } else {
      var tmp0_isNullOrEmpty_0 = _this_._cohortIds;
      tmp = tmp0_isNullOrEmpty_0 == null ? true : tmp0_isNullOrEmpty_0.isEmpty_28();
    }
    if (tmp) {
      return false;
    } else {
    }
    var tmp0_iterator = filterCohortIds.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var cohortId = tmp0_iterator.next_13();
      if (_this_._cohortIds.contains_26(cohortId)) {
        return true;
      }}
    return false;
  }
  function Keys() {
    Keys_instance = this;
    this._ID = 'id';
    this._USER_ID = 'user_id';
    this._DEVICE_ID = 'device_id';
    this._AMPLITUDE_ID = 'amplitude_id';
    this._DEVICE_FAMILY = 'device_family';
    this._DEVICE_TYPE = 'device_type';
    this._DEVICE_MANUFACTURER = 'device_manufacturer';
    this._DEVICE_BRAND = 'device_brand';
    this._DEVICE_MODEL = 'device_model';
    this._COUNTRY = 'country';
    this._REGION = 'region';
    this._DMA = 'dma';
    this._CITY = 'city';
    this._LANGUAGE = 'language';
    this._PLATFORM = 'platform';
    this._VERSION = 'version';
    this._OS = 'os';
    this._CARRIER = 'carrier';
    this._USER_PROPERTIES = 'user_properties';
    this._COHORT_IDS = 'cohort_ids';
    this._LIBRARY = 'library';
  }
  Keys.$metadata$ = {
    simpleName: 'Keys',
    kind: 'object',
    interfaces: []
  };
  var Keys_instance;
  function Keys_getInstance() {
    if (Keys_instance == null)
      new Keys();
    return Keys_instance;
  }
  function SkylabUser(userId, deviceId, amplitudeId, country, region, dma, city, language, platform, version, os, deviceManufacturer, deviceBrand, deviceModel, deviceFamily, deviceType, carrier, library, cohortIds, userProperties) {
    Keys_getInstance();
    this._userId = userId;
    this._deviceId = deviceId;
    this._amplitudeId = amplitudeId;
    this._country = country;
    this._region = region;
    this._dma = dma;
    this._city = city;
    this._language = language;
    this._platform = platform;
    this._version = version;
    this._os = os;
    this._deviceManufacturer = deviceManufacturer;
    this._deviceBrand = deviceBrand;
    this._deviceModel = deviceModel;
    this._deviceFamily = deviceFamily;
    this._deviceType = deviceType;
    this._carrier = carrier;
    this._library = library;
    this._cohortIds = cohortIds;
    this._userProperties = userProperties;
  }
  SkylabUser.prototype.toString = function () {
    return '' + 'SkylabUser(userId=' + this._userId + ', deviceId=' + this._deviceId + ', amplitudeId=' + this._amplitudeId + ', country=' + this._country + ', region=' + this._region + ', dma=' + this._dma + ', city=' + this._city + ', language=' + this._language + ', platform=' + this._platform + ', version=' + this._version + ', os=' + this._os + ', deviceManufacturer=' + this._deviceManufacturer + ', deviceBrand=' + this._deviceBrand + ', deviceModel=' + this._deviceModel + ', deviceFamily=' + this._deviceFamily + ', deviceType=' + this._deviceType + ', carrier=' + this._carrier + ', library=' + this._library + ', cohortIds=' + this._cohortIds + ', userProperties=' + this._userProperties + ')';
  };
  SkylabUser.prototype.hashCode = function () {
    var result = this._userId == null ? 0 : getStringHashCode(this._userId);
    result = imul(result, 31) + (this._deviceId == null ? 0 : getStringHashCode(this._deviceId)) | 0;
    result = imul(result, 31) + (this._amplitudeId == null ? 0 : this._amplitudeId.hashCode()) | 0;
    result = imul(result, 31) + (this._country == null ? 0 : getStringHashCode(this._country)) | 0;
    result = imul(result, 31) + (this._region == null ? 0 : getStringHashCode(this._region)) | 0;
    result = imul(result, 31) + (this._dma == null ? 0 : getStringHashCode(this._dma)) | 0;
    result = imul(result, 31) + (this._city == null ? 0 : getStringHashCode(this._city)) | 0;
    result = imul(result, 31) + (this._language == null ? 0 : getStringHashCode(this._language)) | 0;
    result = imul(result, 31) + (this._platform == null ? 0 : getStringHashCode(this._platform)) | 0;
    result = imul(result, 31) + (this._version == null ? 0 : getStringHashCode(this._version)) | 0;
    result = imul(result, 31) + (this._os == null ? 0 : getStringHashCode(this._os)) | 0;
    result = imul(result, 31) + (this._deviceManufacturer == null ? 0 : getStringHashCode(this._deviceManufacturer)) | 0;
    result = imul(result, 31) + (this._deviceBrand == null ? 0 : getStringHashCode(this._deviceBrand)) | 0;
    result = imul(result, 31) + (this._deviceModel == null ? 0 : getStringHashCode(this._deviceModel)) | 0;
    result = imul(result, 31) + (this._deviceFamily == null ? 0 : getStringHashCode(this._deviceFamily)) | 0;
    result = imul(result, 31) + (this._deviceType == null ? 0 : getStringHashCode(this._deviceType)) | 0;
    result = imul(result, 31) + (this._carrier == null ? 0 : getStringHashCode(this._carrier)) | 0;
    result = imul(result, 31) + (this._library == null ? 0 : getStringHashCode(this._library)) | 0;
    result = imul(result, 31) + (this._cohortIds == null ? 0 : hashCode(this._cohortIds)) | 0;
    result = imul(result, 31) + (this._userProperties == null ? 0 : hashCode(this._userProperties)) | 0;
    return result;
  };
  SkylabUser.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkylabUser))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SkylabUser ? other : THROW_CCE();
    if (!(this._userId == tmp0_other_with_cast._userId))
      return false;
    if (!(this._deviceId == tmp0_other_with_cast._deviceId))
      return false;
    if (!equals_1(this._amplitudeId, tmp0_other_with_cast._amplitudeId))
      return false;
    if (!(this._country == tmp0_other_with_cast._country))
      return false;
    if (!(this._region == tmp0_other_with_cast._region))
      return false;
    if (!(this._dma == tmp0_other_with_cast._dma))
      return false;
    if (!(this._city == tmp0_other_with_cast._city))
      return false;
    if (!(this._language == tmp0_other_with_cast._language))
      return false;
    if (!(this._platform == tmp0_other_with_cast._platform))
      return false;
    if (!(this._version == tmp0_other_with_cast._version))
      return false;
    if (!(this._os == tmp0_other_with_cast._os))
      return false;
    if (!(this._deviceManufacturer == tmp0_other_with_cast._deviceManufacturer))
      return false;
    if (!(this._deviceBrand == tmp0_other_with_cast._deviceBrand))
      return false;
    if (!(this._deviceModel == tmp0_other_with_cast._deviceModel))
      return false;
    if (!(this._deviceFamily == tmp0_other_with_cast._deviceFamily))
      return false;
    if (!(this._deviceType == tmp0_other_with_cast._deviceType))
      return false;
    if (!(this._carrier == tmp0_other_with_cast._carrier))
      return false;
    if (!(this._library == tmp0_other_with_cast._library))
      return false;
    if (!equals_1(this._cohortIds, tmp0_other_with_cast._cohortIds))
      return false;
    if (!equals_1(this._userProperties, tmp0_other_with_cast._userProperties))
      return false;
    return true;
  };
  SkylabUser.$metadata$ = {
    simpleName: 'SkylabUser',
    kind: 'class',
    interfaces: []
  };
  function getBucketingValue(_this_, bucketingKey) {
    var tmp0_subject = bucketingKey;
    var tmp;
    Keys_getInstance();
    if (tmp0_subject === 'id') {
      tmp = _this_._deviceId;
    } else {
      Keys_getInstance();
      if (tmp0_subject === 'amplitude_id') {
        var tmp_0;
        if (equals_1(_this_._amplitudeId, new Long(0, 0))) {
          var tmp_1 = Logger_getInstance();
          var tmp_2 = '' + 'AmpId is 0 for amplitudeId bucketing; Skylab User is ' + _this_;
          tmp_1.w$default_0(tmp_2, null, 2, null);
          tmp_0 = null;
        } else {
          var amplitudeId = toString_0(_this_._amplitudeId);
          Logger_getInstance().d('' + 'AmplitudeID bucketing key is ' + amplitudeId);
          tmp_0 = amplitudeId;
        }
        tmp = tmp_0;
      } else {
        {
          tmp = getProperty(_this_, bucketingKey);
        }
      }
    }
    return tmp;
  }
  function getProperty(_this_, key) {
    if (isCustomUserProperty(key)) {
      var sanitizedKey = sanitizeCustomUserPropKey(key);
      var tmp;
      var tmp_0;
      if (_this_._userProperties == null) {
        tmp_0 = true;
      } else {
        var tmp0_containsKey_0 = _this_._userProperties;
        tmp_0 = !((!(tmp0_containsKey_0 == null) ? isInterface(tmp0_containsKey_0, Map_0) : false) ? tmp0_containsKey_0 : THROW_CCE()).containsKey_8(sanitizedKey);
      }
      if (tmp_0) {
        tmp = null;
      } else {
        {
          var tmp1_get_0 = _this_._userProperties;
          var tmp0_safe_receiver = ((!(tmp1_get_0 == null) ? isInterface(tmp1_get_0, Map_0) : false) ? tmp1_get_0 : THROW_CCE()).get_16(sanitizedKey);
          tmp = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
        }
      }
      return tmp;
    }var tmp1_subject = key;
    var tmp_1;
    Keys_getInstance();
    if (tmp1_subject === 'amplitude_id') {
      tmp_1 = toString_0(_this_._amplitudeId);
    } else {
      Keys_getInstance();
      if (tmp1_subject === 'user_id') {
        tmp_1 = _this_._userId;
      } else {
        Keys_getInstance();
        if (tmp1_subject === 'device_id') {
          tmp_1 = _this_._deviceId;
        } else {
          Keys_getInstance();
          if (tmp1_subject === 'country') {
            tmp_1 = _this_._country;
          } else {
            Keys_getInstance();
            if (tmp1_subject === 'region') {
              tmp_1 = _this_._region;
            } else {
              Keys_getInstance();
              if (tmp1_subject === 'dma') {
                tmp_1 = _this_._dma;
              } else {
                Keys_getInstance();
                if (tmp1_subject === 'city') {
                  tmp_1 = _this_._city;
                } else {
                  Keys_getInstance();
                  if (tmp1_subject === 'language') {
                    tmp_1 = _this_._language;
                  } else {
                    Keys_getInstance();
                    if (tmp1_subject === 'platform') {
                      tmp_1 = _this_._platform;
                    } else {
                      Keys_getInstance();
                      if (tmp1_subject === 'version') {
                        tmp_1 = _this_._version;
                      } else {
                        Keys_getInstance();
                        if (tmp1_subject === 'os') {
                          tmp_1 = _this_._os;
                        } else {
                          Keys_getInstance();
                          if (tmp1_subject === 'device_family') {
                            tmp_1 = _this_._deviceFamily;
                          } else {
                            Keys_getInstance();
                            if (tmp1_subject === 'device_type') {
                              tmp_1 = _this_._deviceType;
                            } else {
                              Keys_getInstance();
                              if (tmp1_subject === 'carrier') {
                                tmp_1 = _this_._carrier;
                              } else {
                                {
                                  Logger_getInstance().d('' + 'Property key ' + key + ' not found on SkylabUser');
                                  tmp_1 = null;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp_1;
  }
  function isCustomUserProperty(_this_) {
    return startsWith$default(_this_, 'gp:', false, 2, null);
  }
  function sanitizeCustomUserPropKey(_this_) {
    var tmp0_substring_0 = 3;
    return _this_.substring(tmp0_substring_0);
  }
  function StringMatchColumnFilter(columnName, operator, values_1) {
    this._columnName = columnName;
    this._operator = operator;
    this._values_1 = values_1;
    this._hasNone = containsNone(this._values_1);
    this._hasBooleans = containsBooleans(this._values_1);
  }
  StringMatchColumnFilter.prototype.toString = function () {
    return '' + 'StringMatchColumnFilter(columnName=' + this._columnName + ', operator=' + this._operator + ', values=' + this._values_1 + ')';
  };
  StringMatchColumnFilter.prototype.hashCode = function () {
    var result = getStringHashCode(this._columnName);
    result = imul(result, 31) + this._operator.hashCode() | 0;
    result = imul(result, 31) + hashCode(this._values_1) | 0;
    return result;
  };
  StringMatchColumnFilter.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StringMatchColumnFilter))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof StringMatchColumnFilter ? other : THROW_CCE();
    if (!(this._columnName === tmp0_other_with_cast._columnName))
      return false;
    if (!this._operator.equals(tmp0_other_with_cast._operator))
      return false;
    if (!equals_1(this._values_1, tmp0_other_with_cast._values_1))
      return false;
    return true;
  };
  StringMatchColumnFilter.$metadata$ = {
    simpleName: 'StringMatchColumnFilter',
    kind: 'class',
    interfaces: []
  };
  function matchesNull(_this_) {
    var tmp0_subject = _this_._operator;
    var tmp;
    if (((((((((((tmp0_subject.equals(Operator_IS_getInstance()) ? true : tmp0_subject.equals(Operator_CONTAINS_getInstance())) ? true : tmp0_subject.equals(Operator_LESS_THAN_getInstance())) ? true : tmp0_subject.equals(Operator_LESS_THAN_EQUALS_getInstance())) ? true : tmp0_subject.equals(Operator_GREATER_THAN_getInstance())) ? true : tmp0_subject.equals(Operator_GREATER_THAN_EQUALS_getInstance())) ? true : tmp0_subject.equals(Operator_VERSION_LESS_THAN_getInstance())) ? true : tmp0_subject.equals(Operator_VERSION_LESS_THAN_EQUALS_getInstance())) ? true : tmp0_subject.equals(Operator_VERSION_GREATER_THAN_getInstance())) ? true : tmp0_subject.equals(Operator_VERSION_GREATER_THAN_EQUALS_getInstance())) ? true : tmp0_subject.equals(Operator_SET_IS_getInstance())) ? true : tmp0_subject.equals(Operator_SET_CONTAINS_getInstance())) {
      tmp = _this_._hasNone;
    } else if (tmp0_subject.equals(Operator_IS_NOT_getInstance()) ? true : tmp0_subject.equals(Operator_DOES_NOT_CONTAIN_getInstance())) {
      tmp = !_this_._hasNone;
    } else if ((tmp0_subject.equals(Operator_SET_IS_NOT_getInstance()) ? true : tmp0_subject.equals(Operator_SET_DOES_NOT_CONTAIN_getInstance())) ? true : tmp0_subject.equals(Operator_GLOB_DOES_NOT_MATCH_getInstance())) {
      tmp = true;
    } else if (tmp0_subject.equals(Operator_CSS_MATCH_getInstance()) ? true : tmp0_subject.equals(Operator_GLOB_MATCH_getInstance())) {
      tmp = false;
    } else {
      throw IllegalArgumentException_init_$Create$_0('' + 'Unexpected operator ' + _this_._operator);
    }
    return tmp;
  }
  function matches_0(_this_, value) {
    var tmp0_subject = _this_._operator;
    var tmp;
    if (tmp0_subject.equals(Operator_IS_getInstance())) {
      tmp = matchesIs(value, _this_._values_1, _this_._hasBooleans);
    } else if (tmp0_subject.equals(Operator_IS_NOT_getInstance())) {
      tmp = !matchesIs(value, _this_._values_1, _this_._hasBooleans);
    } else if (tmp0_subject.equals(Operator_CONTAINS_getInstance())) {
      tmp = matchesContains(value, _this_._values_1);
    } else if (tmp0_subject.equals(Operator_DOES_NOT_CONTAIN_getInstance())) {
      tmp = !matchesContains(value, _this_._values_1);
    } else if (((tmp0_subject.equals(Operator_LESS_THAN_getInstance()) ? true : tmp0_subject.equals(Operator_LESS_THAN_EQUALS_getInstance())) ? true : tmp0_subject.equals(Operator_GREATER_THAN_getInstance())) ? true : tmp0_subject.equals(Operator_GREATER_THAN_EQUALS_getInstance())) {
      tmp = matchesCompare(value, _this_._values_1, _this_._operator);
    } else {
      throw IllegalArgumentException_init_$Create$_0('' + 'Unexpected or unsupported operator ' + _this_._operator);
    }
    return tmp;
  }
  function containsNone(_this_) {
    return _this_.contains_26('(none)');
  }
  function containsBooleans(_this_) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(_this_, Collection)) {
        tmp = _this_.isEmpty_28();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = _this_.iterator_38();
      while (tmp0_iterator_1.hasNext_13()) {
        var element_2 = tmp0_iterator_1.next_13();
        switch (element_2) {
          case 'true':
          case 'false':
            tmp$ret$0 = true;
            break l$ret$1;
          default:break;
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  }
  function matchesIs(_this_, values_1, hasBooleans) {
    var value = _this_;
    if (hasBooleans) {
      var tmp0_safe_receiver = _this_;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.toLowerCase();
      }
      var lower = tmp;
      if (lower === 'true' ? true : lower === 'false') {
        value = lower;
      }}return values_1.contains_26(value);
  }
  function matchesContains(_this_, values_1) {
    if (_this_ == null) {
      return false;
    }var tmp0_iterator = values_1.iterator_38();
    while (tmp0_iterator.hasNext_13()) {
      var filterValue = tmp0_iterator.next_13();
      var tmp1_elvis_lhs = filterValue;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var filter = tmp;
      if (contains_1(_this_, filter, true)) {
        return true;
      }}
    return false;
  }
  function matchesCompare(_this_, values_1, operator) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(values_1, Collection)) {
        tmp = values_1.isEmpty_28();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = values_1.iterator_38();
      while (tmp0_iterator_1.hasNext_13()) {
        var element_2 = tmp0_iterator_1.next_13();
        if (compareStrings(_this_, operator, element_2)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  }
  function compareStrings(_this_, operator, filterValue) {
    if (_this_ == null ? true : filterValue == null) {
      return false;
    }var compareTo_0 = compareTo(_this_, filterValue);
    var tmp0_subject = operator;
    var tmp;
    if (tmp0_subject.equals(Operator_LESS_THAN_getInstance())) {
      tmp = compareTo_0 < 0;
    } else if (tmp0_subject.equals(Operator_LESS_THAN_EQUALS_getInstance())) {
      tmp = compareTo_0 <= 0;
    } else if (tmp0_subject.equals(Operator_GREATER_THAN_getInstance())) {
      tmp = compareTo_0 > 0;
    } else if (tmp0_subject.equals(Operator_GREATER_THAN_EQUALS_getInstance())) {
      tmp = compareTo_0 >= 0;
    } else {
      throw IllegalArgumentException_init_$Create$_0('' + 'Unexpected operator ' + operator);
    }
    return tmp;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.amplitude.experiment.evaluation.UserPropertyFilter', this, 3);
    tmp0_serialDesc.addElement_0('prop', false);
    tmp0_serialDesc.addElement_0('op', false);
    tmp0_serialDesc.addElement_0('values', false);
    this._descriptor_37 = tmp0_serialDesc;
  }
  $serializer_4.prototype._get_descriptor__57 = function () {
    return this._descriptor_37;
  };
  $serializer_4.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [StringSerializer_getInstance(), new EnumSerializer('com.amplitude.experiment.evaluation.Operator', values_0()), new LinkedHashSetSerializer(StringSerializer_getInstance())];
    return tmp0_arrayOf_0;
  };
  $serializer_4.prototype.deserialize_61 = function (decoder) {
    var tmp0_desc = this._descriptor_37;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_11(tmp0_desc);
    if (tmp7_input.decodeSequentially_8()) {
      tmp4_local0 = tmp7_input.decodeStringElement_8(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeSerializableElement_8(tmp0_desc, 1, new EnumSerializer('com.amplitude.experiment.evaluation.Operator', values_0()), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeSerializableElement_8(tmp0_desc, 2, new LinkedHashSetSerializer(StringSerializer_getInstance()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeStringElement_8(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeSerializableElement_8(tmp0_desc, 1, new EnumSerializer('com.amplitude.experiment.evaluation.Operator', values_0()), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeSerializableElement_8(tmp0_desc, 2, new LinkedHashSetSerializer(StringSerializer_getInstance()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_11(tmp0_desc);
    return UserPropertyFilter_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_4.prototype.serialize_86 = function (encoder, value) {
    var tmp0_desc = this._descriptor_37;
    var tmp1_output = encoder.beginStructure_11(tmp0_desc);
    tmp1_output.encodeStringElement_1(tmp0_desc, 0, value._prop);
    tmp1_output.encodeSerializableElement_1(tmp0_desc, 1, new EnumSerializer('com.amplitude.experiment.evaluation.Operator', values_0()), value._op);
    tmp1_output.encodeSerializableElement_1(tmp0_desc, 2, new LinkedHashSetSerializer(StringSerializer_getInstance()), value._values_2);
    tmp1_output.endStructure_11(tmp0_desc);
  };
  $serializer_4.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_86(encoder, value instanceof UserPropertyFilter ? value : THROW_CCE());
  };
  $serializer_4.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function UserPropertyFilter_init_$Init$(seen1, prop, op, values_1, serializationConstructorMarker, $this) {
    if (0 === (seen1 & 1))
      throw MissingFieldException_init_$Create$('prop');
    else
      $this._prop = prop;
    if (0 === (seen1 & 2))
      throw MissingFieldException_init_$Create$('op');
    else
      $this._op = op;
    if (0 === (seen1 & 4))
      throw MissingFieldException_init_$Create$('values');
    else
      $this._values_2 = values_1;
    return $this;
  }
  function UserPropertyFilter_init_$Create$(seen1, prop, op, values_1, serializationConstructorMarker) {
    return UserPropertyFilter_init_$Init$(seen1, prop, op, values_1, serializationConstructorMarker, Object.create(UserPropertyFilter.prototype));
  }
  function UserPropertyFilter() {
  }
  UserPropertyFilter.prototype.toString = function () {
    return '' + 'UserPropertyFilter(prop=' + this._prop + ', op=' + this._op + ', values=' + this._values_2 + ')';
  };
  UserPropertyFilter.prototype.hashCode = function () {
    var result = getStringHashCode(this._prop);
    result = imul(result, 31) + this._op.hashCode() | 0;
    result = imul(result, 31) + hashCode(this._values_2) | 0;
    return result;
  };
  UserPropertyFilter.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserPropertyFilter))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UserPropertyFilter ? other : THROW_CCE();
    if (!(this._prop === tmp0_other_with_cast._prop))
      return false;
    if (!this._op.equals(tmp0_other_with_cast._op))
      return false;
    if (!equals_1(this._values_2, tmp0_other_with_cast._values_2))
      return false;
    return true;
  };
  UserPropertyFilter.$metadata$ = {
    simpleName: 'UserPropertyFilter',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance_4}
  };
  function isCohortFilter(_this_) {
    return _this_._prop === 'userdata_cohort';
  }
  function Variant_init_$Init$(key, payload, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      key = null;
    if (!(($mask0 & 2) === 0))
      payload = null;
    Variant.call($this, key, payload);
    return $this;
  }
  function Variant_init_$Create$(key, payload, $mask0, $marker) {
    return Variant_init_$Init$(key, payload, $mask0, $marker, Object.create(Variant.prototype));
  }
  function Companion_20() {
    Companion_instance_19 = this;
  }
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_20();
    return Companion_instance_19;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.amplitude.experiment.evaluation.Variant', this, 2);
    tmp0_serialDesc.addElement_0('key', true);
    tmp0_serialDesc.addElement_0('payload', true);
    this._descriptor_38 = tmp0_serialDesc;
  }
  $serializer_5.prototype._get_descriptor__57 = function () {
    return this._descriptor_38;
  };
  $serializer_5.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(JsonElementSerializer_getInstance())];
    return tmp0_arrayOf_0;
  };
  $serializer_5.prototype.deserialize_61 = function (decoder) {
    var tmp0_desc = this._descriptor_38;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_11(tmp0_desc);
    if (tmp6_input.decodeSequentially_8()) {
      tmp4_local0 = tmp6_input.decodeNullableSerializableElement_8(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeNullableSerializableElement_8(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeNullableSerializableElement_8(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeNullableSerializableElement_8(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_11(tmp0_desc);
    return Variant_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_5.prototype.serialize_88 = function (encoder, value) {
    var tmp0_desc = this._descriptor_38;
    var tmp1_output = encoder.beginStructure_11(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 0) ? true : !(value._key_1 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 0, StringSerializer_getInstance(), value._key_1);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 1) ? true : !(value._payload == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 1, JsonElementSerializer_getInstance(), value._payload);
    tmp1_output.endStructure_11(tmp0_desc);
  };
  $serializer_5.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_88(encoder, value instanceof Variant ? value : THROW_CCE());
  };
  $serializer_5.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function Variant_init_$Init$_0(seen1, key, payload, serializationConstructorMarker, $this) {
    if (0 === (seen1 & 1))
      $this._key_1 = null;
    else
      $this._key_1 = key;
    if (0 === (seen1 & 2))
      $this._payload = null;
    else
      $this._payload = payload;
    return $this;
  }
  function Variant_init_$Create$_0(seen1, key, payload, serializationConstructorMarker) {
    return Variant_init_$Init$_0(seen1, key, payload, serializationConstructorMarker, Object.create(Variant.prototype));
  }
  function Variant(key, payload) {
    Companion_getInstance_19();
    this._key_1 = key;
    this._payload = payload;
  }
  Variant.prototype.toString = function () {
    return '' + 'Variant(key=' + this._key_1 + ', payload=' + this._payload + ')';
  };
  Variant.prototype.hashCode = function () {
    var result = this._key_1 == null ? 0 : getStringHashCode(this._key_1);
    result = imul(result, 31) + (this._payload == null ? 0 : hashCode(this._payload)) | 0;
    return result;
  };
  Variant.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Variant))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Variant ? other : THROW_CCE();
    if (!(this._key_1 == tmp0_other_with_cast._key_1))
      return false;
    if (!equals_1(this._payload, tmp0_other_with_cast._payload))
      return false;
    return true;
  };
  Variant.$metadata$ = {
    simpleName: 'Variant',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance_5}
  };
  function VariantDistribution(variant, pct, cumulativePct) {
    this._variant_1 = variant;
    this._pct = pct;
    this._cumulativePct = cumulativePct;
  }
  VariantDistribution.prototype.toString = function () {
    return '' + 'VariantDistribution(variant=' + this._variant_1 + ', pct=' + this._pct + ', cumulativePct=' + this._cumulativePct + ')';
  };
  VariantDistribution.prototype.hashCode = function () {
    var result = this._variant_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this._pct) | 0;
    result = imul(result, 31) + getNumberHashCode(this._cumulativePct) | 0;
    return result;
  };
  VariantDistribution.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VariantDistribution))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof VariantDistribution ? other : THROW_CCE();
    if (!this._variant_1.equals(tmp0_other_with_cast._variant_1))
      return false;
    if (!equals_1(this._pct, tmp0_other_with_cast._pct))
      return false;
    if (!equals_1(this._cumulativePct, tmp0_other_with_cast._cumulativePct))
      return false;
    return true;
  };
  VariantDistribution.$metadata$ = {
    simpleName: 'VariantDistribution',
    kind: 'class',
    interfaces: []
  };
  var format;
  var engine;
  function evaluate(rules, user) {
    var tmp0_decodeFromString_0 = format;
    var tmp1_serializer_0_1 = tmp0_decodeFromString_0._get_serializersModule__15();
    var tmp0_cast_0_2 = serializer(tmp1_serializer_0_1, createKType_0(getKClass_0(List), [createInvariantKTypeProjection_0(createKType_0(getKClass_0(FlagConfig), [], false))], false));
    var flagsDecoded = tmp0_decodeFromString_0.decodeFromString_2(isInterface(tmp0_cast_0_2, KSerializer) ? tmp0_cast_0_2 : THROW_CCE(), rules);
    var tmp1_decodeFromString_0 = format;
    var tmp1_serializer_0_1_0 = tmp1_decodeFromString_0._get_serializersModule__15();
    var tmp0_cast_0_2_0 = serializer(tmp1_serializer_0_1_0, createKType_0(getKClass_0(ExperimentUser), [], false));
    var userDecoded = tmp1_decodeFromString_0.decodeFromString_2(isInterface(tmp0_cast_0_2_0, KSerializer) ? tmp0_cast_0_2_0 : THROW_CCE(), user);
    var results = engine.evaluate(flagsDecoded, toSkylabUser(userDecoded));
    var tmp2_encodeToString_0 = format;
    var tmp1_serializer_0_1_1 = tmp2_encodeToString_0._get_serializersModule__15();
    var tmp0_cast_0_2_1 = serializer(tmp1_serializer_0_1_1, createKType_0(getKClass_0(Map_0), [createInvariantKTypeProjection_0(createKType_0(PrimitiveClasses_getInstance()._get_stringClass_(), [], false)), createInvariantKTypeProjection_0(createKType_0(getKClass_0(FlagResult), [], false))], false));
    return tmp2_encodeToString_0.encodeToString_2(isInterface(tmp0_cast_0_2_1, KSerializer) ? tmp0_cast_0_2_1 : THROW_CCE(), results);
  }
  function _no_name_provided__64() {
  }
  _no_name_provided__64.prototype.invoke_94 = function ($this$Json) {
    $this$Json._ignoreUnknownKeys = true;
    $this$Json._isLenient = true;
    $this$Json._coerceInputValues = true;
  };
  _no_name_provided__64.prototype.invoke_95 = function (p1) {
    this.invoke_94(p1 instanceof JsonBuilder ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__64.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_53() {
    var i = new _no_name_provided__64();
    return function (p1) {
      i.invoke_94(p1);
      return Unit_getInstance();
    };
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ExperimentUser', this, 20);
    tmp0_serialDesc.addElement_0('user_id', true);
    tmp0_serialDesc.addElement_0('device_id', true);
    tmp0_serialDesc.addElement_0('amplitude_id', true);
    tmp0_serialDesc.addElement_0('country', true);
    tmp0_serialDesc.addElement_0('region', true);
    tmp0_serialDesc.addElement_0('dma', true);
    tmp0_serialDesc.addElement_0('city', true);
    tmp0_serialDesc.addElement_0('language', true);
    tmp0_serialDesc.addElement_0('platform', true);
    tmp0_serialDesc.addElement_0('version', true);
    tmp0_serialDesc.addElement_0('os', true);
    tmp0_serialDesc.addElement_0('device_manufacturer', true);
    tmp0_serialDesc.addElement_0('device_brand', true);
    tmp0_serialDesc.addElement_0('device_model', true);
    tmp0_serialDesc.addElement_0('device_family', true);
    tmp0_serialDesc.addElement_0('device_type', true);
    tmp0_serialDesc.addElement_0('carrier', true);
    tmp0_serialDesc.addElement_0('library', true);
    tmp0_serialDesc.addElement_0('cohort_ids', true);
    tmp0_serialDesc.addElement_0('user_properties', true);
    this._descriptor_39 = tmp0_serialDesc;
  }
  $serializer_6.prototype._get_descriptor__57 = function () {
    return this._descriptor_39;
  };
  $serializer_6.prototype.childSerializers_8 = function () {
    var tmp0_arrayOf_0 = [new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(LongSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(StringSerializer_getInstance()), new NullableSerializer(new LinkedHashSetSerializer(StringSerializer_getInstance())), new NullableSerializer(JsonObjectSerializer_getInstance())];
    return tmp0_arrayOf_0;
  };
  $serializer_6.prototype.deserialize_61 = function (decoder) {
    var tmp0_desc = this._descriptor_39;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = null;
    var tmp23_local19 = null;
    var tmp24_input = decoder.beginStructure_11(tmp0_desc);
    if (tmp24_input.decodeSequentially_8()) {
      tmp4_local0 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 2, LongSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 18, new LinkedHashSetSerializer(StringSerializer_getInstance()), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 19, JsonObjectSerializer_getInstance(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp24_input.decodeElementIndex_8(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 2, LongSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 16, StringSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 17, StringSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 18, new LinkedHashSetSerializer(StringSerializer_getInstance()), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp24_input.decodeNullableSerializableElement_8(tmp0_desc, 19, JsonObjectSerializer_getInstance(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          default:throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp24_input.endStructure_11(tmp0_desc);
    return ExperimentUser_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, null);
  };
  $serializer_6.prototype.serialize_90 = function (encoder, value) {
    var tmp0_desc = this._descriptor_39;
    var tmp1_output = encoder.beginStructure_11(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 0) ? true : !(value._userId_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 0, StringSerializer_getInstance(), value._userId_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 1) ? true : !(value._deviceId_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 1, StringSerializer_getInstance(), value._deviceId_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 2) ? true : !equals_1(value._amplitudeId_0, new Long(0, 0)))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 2, LongSerializer_getInstance(), value._amplitudeId_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 3) ? true : !(value._country_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 3, StringSerializer_getInstance(), value._country_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 4) ? true : !(value._region_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 4, StringSerializer_getInstance(), value._region_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 5) ? true : !(value._dma_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 5, StringSerializer_getInstance(), value._dma_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 6) ? true : !(value._city_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 6, StringSerializer_getInstance(), value._city_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 7) ? true : !(value._language_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 7, StringSerializer_getInstance(), value._language_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 8) ? true : !(value._platform_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 8, StringSerializer_getInstance(), value._platform_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 9) ? true : !(value._version_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 9, StringSerializer_getInstance(), value._version_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 10) ? true : !(value._os_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 10, StringSerializer_getInstance(), value._os_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 11) ? true : !(value._deviceManufacturer_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 11, StringSerializer_getInstance(), value._deviceManufacturer_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 12) ? true : !(value._deviceBrand_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 12, StringSerializer_getInstance(), value._deviceBrand_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 13) ? true : !(value._deviceModel_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 13, StringSerializer_getInstance(), value._deviceModel_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 14) ? true : !(value._deviceFamily_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 14, StringSerializer_getInstance(), value._deviceFamily_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 15) ? true : !(value._deviceType_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 15, StringSerializer_getInstance(), value._deviceType_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 16) ? true : !(value._carrier_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 16, StringSerializer_getInstance(), value._carrier_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 17) ? true : !(value._library_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 17, StringSerializer_getInstance(), value._library_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 18) ? true : !(value._cohortIds_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 18, new LinkedHashSetSerializer(StringSerializer_getInstance()), value._cohortIds_0);
    if (tmp1_output.shouldEncodeElementDefault_1(tmp0_desc, 19) ? true : !(value._userProperties_0 == null))
      tmp1_output.encodeNullableSerializableElement_1(tmp0_desc, 19, JsonObjectSerializer_getInstance(), value._userProperties_0);
    tmp1_output.endStructure_11(tmp0_desc);
  };
  $serializer_6.prototype.serialize_91 = function (encoder, value) {
    return this.serialize_90(encoder, value instanceof ExperimentUser ? value : THROW_CCE());
  };
  $serializer_6.$metadata$ = {
    simpleName: '$serializer',
    kind: 'object',
    interfaces: [GeneratedSerializer]
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function ExperimentUser_init_$Init$(seen1, userId, deviceId, amplitudeId, country, region, dma, city, language, platform, version, os, deviceManufacturer, deviceBrand, deviceModel, deviceFamily, deviceType, carrier, library, cohortIds, userProperties, serializationConstructorMarker, $this) {
    if (0 === (seen1 & 1))
      $this._userId_0 = null;
    else
      $this._userId_0 = userId;
    if (0 === (seen1 & 2))
      $this._deviceId_0 = null;
    else
      $this._deviceId_0 = deviceId;
    if (0 === (seen1 & 4))
      $this._amplitudeId_0 = new Long(0, 0);
    else
      $this._amplitudeId_0 = amplitudeId;
    if (0 === (seen1 & 8))
      $this._country_0 = null;
    else
      $this._country_0 = country;
    if (0 === (seen1 & 16))
      $this._region_0 = null;
    else
      $this._region_0 = region;
    if (0 === (seen1 & 32))
      $this._dma_0 = null;
    else
      $this._dma_0 = dma;
    if (0 === (seen1 & 64))
      $this._city_0 = null;
    else
      $this._city_0 = city;
    if (0 === (seen1 & 128))
      $this._language_0 = null;
    else
      $this._language_0 = language;
    if (0 === (seen1 & 256))
      $this._platform_0 = null;
    else
      $this._platform_0 = platform;
    if (0 === (seen1 & 512))
      $this._version_0 = null;
    else
      $this._version_0 = version;
    if (0 === (seen1 & 1024))
      $this._os_0 = null;
    else
      $this._os_0 = os;
    if (0 === (seen1 & 2048))
      $this._deviceManufacturer_0 = null;
    else
      $this._deviceManufacturer_0 = deviceManufacturer;
    if (0 === (seen1 & 4096))
      $this._deviceBrand_0 = null;
    else
      $this._deviceBrand_0 = deviceBrand;
    if (0 === (seen1 & 8192))
      $this._deviceModel_0 = null;
    else
      $this._deviceModel_0 = deviceModel;
    if (0 === (seen1 & 16384))
      $this._deviceFamily_0 = null;
    else
      $this._deviceFamily_0 = deviceFamily;
    if (0 === (seen1 & 32768))
      $this._deviceType_0 = null;
    else
      $this._deviceType_0 = deviceType;
    if (0 === (seen1 & 65536))
      $this._carrier_0 = null;
    else
      $this._carrier_0 = carrier;
    if (0 === (seen1 & 131072))
      $this._library_0 = null;
    else
      $this._library_0 = library;
    if (0 === (seen1 & 262144))
      $this._cohortIds_0 = null;
    else
      $this._cohortIds_0 = cohortIds;
    if (0 === (seen1 & 524288))
      $this._userProperties_0 = null;
    else
      $this._userProperties_0 = userProperties;
    return $this;
  }
  function ExperimentUser_init_$Create$(seen1, userId, deviceId, amplitudeId, country, region, dma, city, language, platform, version, os, deviceManufacturer, deviceBrand, deviceModel, deviceFamily, deviceType, carrier, library, cohortIds, userProperties, serializationConstructorMarker) {
    return ExperimentUser_init_$Init$(seen1, userId, deviceId, amplitudeId, country, region, dma, city, language, platform, version, os, deviceManufacturer, deviceBrand, deviceModel, deviceFamily, deviceType, carrier, library, cohortIds, userProperties, serializationConstructorMarker, Object.create(ExperimentUser.prototype));
  }
  function ExperimentUser() {
  }
  ExperimentUser.prototype.toString = function () {
    return '' + 'ExperimentUser(userId=' + this._userId_0 + ', deviceId=' + this._deviceId_0 + ', amplitudeId=' + this._amplitudeId_0 + ', country=' + this._country_0 + ', region=' + this._region_0 + ', dma=' + this._dma_0 + ', city=' + this._city_0 + ', language=' + this._language_0 + ', platform=' + this._platform_0 + ', version=' + this._version_0 + ', os=' + this._os_0 + ', deviceManufacturer=' + this._deviceManufacturer_0 + ', deviceBrand=' + this._deviceBrand_0 + ', deviceModel=' + this._deviceModel_0 + ', deviceFamily=' + this._deviceFamily_0 + ', deviceType=' + this._deviceType_0 + ', carrier=' + this._carrier_0 + ', library=' + this._library_0 + ', cohortIds=' + this._cohortIds_0 + ', userProperties=' + this._userProperties_0 + ')';
  };
  ExperimentUser.prototype.hashCode = function () {
    var result = this._userId_0 == null ? 0 : getStringHashCode(this._userId_0);
    result = imul(result, 31) + (this._deviceId_0 == null ? 0 : getStringHashCode(this._deviceId_0)) | 0;
    result = imul(result, 31) + (this._amplitudeId_0 == null ? 0 : this._amplitudeId_0.hashCode()) | 0;
    result = imul(result, 31) + (this._country_0 == null ? 0 : getStringHashCode(this._country_0)) | 0;
    result = imul(result, 31) + (this._region_0 == null ? 0 : getStringHashCode(this._region_0)) | 0;
    result = imul(result, 31) + (this._dma_0 == null ? 0 : getStringHashCode(this._dma_0)) | 0;
    result = imul(result, 31) + (this._city_0 == null ? 0 : getStringHashCode(this._city_0)) | 0;
    result = imul(result, 31) + (this._language_0 == null ? 0 : getStringHashCode(this._language_0)) | 0;
    result = imul(result, 31) + (this._platform_0 == null ? 0 : getStringHashCode(this._platform_0)) | 0;
    result = imul(result, 31) + (this._version_0 == null ? 0 : getStringHashCode(this._version_0)) | 0;
    result = imul(result, 31) + (this._os_0 == null ? 0 : getStringHashCode(this._os_0)) | 0;
    result = imul(result, 31) + (this._deviceManufacturer_0 == null ? 0 : getStringHashCode(this._deviceManufacturer_0)) | 0;
    result = imul(result, 31) + (this._deviceBrand_0 == null ? 0 : getStringHashCode(this._deviceBrand_0)) | 0;
    result = imul(result, 31) + (this._deviceModel_0 == null ? 0 : getStringHashCode(this._deviceModel_0)) | 0;
    result = imul(result, 31) + (this._deviceFamily_0 == null ? 0 : getStringHashCode(this._deviceFamily_0)) | 0;
    result = imul(result, 31) + (this._deviceType_0 == null ? 0 : getStringHashCode(this._deviceType_0)) | 0;
    result = imul(result, 31) + (this._carrier_0 == null ? 0 : getStringHashCode(this._carrier_0)) | 0;
    result = imul(result, 31) + (this._library_0 == null ? 0 : getStringHashCode(this._library_0)) | 0;
    result = imul(result, 31) + (this._cohortIds_0 == null ? 0 : hashCode(this._cohortIds_0)) | 0;
    result = imul(result, 31) + (this._userProperties_0 == null ? 0 : this._userProperties_0.hashCode()) | 0;
    return result;
  };
  ExperimentUser.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExperimentUser))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ExperimentUser ? other : THROW_CCE();
    if (!(this._userId_0 == tmp0_other_with_cast._userId_0))
      return false;
    if (!(this._deviceId_0 == tmp0_other_with_cast._deviceId_0))
      return false;
    if (!equals_1(this._amplitudeId_0, tmp0_other_with_cast._amplitudeId_0))
      return false;
    if (!(this._country_0 == tmp0_other_with_cast._country_0))
      return false;
    if (!(this._region_0 == tmp0_other_with_cast._region_0))
      return false;
    if (!(this._dma_0 == tmp0_other_with_cast._dma_0))
      return false;
    if (!(this._city_0 == tmp0_other_with_cast._city_0))
      return false;
    if (!(this._language_0 == tmp0_other_with_cast._language_0))
      return false;
    if (!(this._platform_0 == tmp0_other_with_cast._platform_0))
      return false;
    if (!(this._version_0 == tmp0_other_with_cast._version_0))
      return false;
    if (!(this._os_0 == tmp0_other_with_cast._os_0))
      return false;
    if (!(this._deviceManufacturer_0 == tmp0_other_with_cast._deviceManufacturer_0))
      return false;
    if (!(this._deviceBrand_0 == tmp0_other_with_cast._deviceBrand_0))
      return false;
    if (!(this._deviceModel_0 == tmp0_other_with_cast._deviceModel_0))
      return false;
    if (!(this._deviceFamily_0 == tmp0_other_with_cast._deviceFamily_0))
      return false;
    if (!(this._deviceType_0 == tmp0_other_with_cast._deviceType_0))
      return false;
    if (!(this._carrier_0 == tmp0_other_with_cast._carrier_0))
      return false;
    if (!(this._library_0 == tmp0_other_with_cast._library_0))
      return false;
    if (!equals_1(this._cohortIds_0, tmp0_other_with_cast._cohortIds_0))
      return false;
    if (!equals_1(this._userProperties_0, tmp0_other_with_cast._userProperties_0))
      return false;
    return true;
  };
  ExperimentUser.$metadata$ = {
    simpleName: 'ExperimentUser',
    kind: 'class',
    interfaces: [],
    associatedObjects: {0: $serializer_getInstance_6}
  };
  function toSkylabUser(_this_) {
    return new SkylabUser(_this_._userId_0, _this_._deviceId_0, _this_._amplitudeId_0, _this_._country_0, _this_._region_0, _this_._dma_0, _this_._city_0, _this_._language_0, _this_._platform_0, _this_._version_0, _this_._os_0, _this_._deviceManufacturer_0, _this_._deviceBrand_0, _this_._deviceModel_0, _this_._deviceFamily_0, _this_._deviceType_0, _this_._carrier_0, _this_._library_0, _this_._cohortIds_0, _this_._userProperties_0);
  }
  AbstractMap.prototype._get_entries__5 = Map_0.prototype._get_entries__5;
  IntIterator.prototype.hasNext_13 = Iterator.prototype.hasNext_13;
  AbstractMutableList.prototype.get_28 = List.prototype.get_28;
  AbstractMutableMap.prototype._get_entries__5 = MutableMap.prototype._get_entries__5;
  InternalHashCodeMap.prototype.createJsMap_0 = InternalMap.prototype.createJsMap_0;
  KClassImpl.prototype._get_simpleName__4 = KClass.prototype._get_simpleName__4;
  KClassImpl.prototype.isInstance_4 = KClass.prototype.isInstance_4;
  AbstractPolymorphicSerializer.prototype._get_descriptor__57 = KSerializer.prototype._get_descriptor__57;
  SerialDescriptorImpl.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  SerialDescriptorImpl.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  AbstractDecoder.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  AbstractDecoder.prototype._get_serializersModule__15 = Decoder.prototype._get_serializersModule__15;
  AbstractDecoder.prototype.decodeSerializableValue_16 = Decoder.prototype.decodeSerializableValue_16;
  AbstractDecoder.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  AbstractDecoder.prototype.decodeElementIndex_8 = CompositeDecoder.prototype.decodeElementIndex_8;
  AbstractDecoder.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  AbstractEncoder.prototype._get_serializersModule__15 = Encoder.prototype._get_serializersModule__15;
  AbstractEncoder.prototype.encodeNotNullMark_1 = Encoder.prototype.encodeNotNullMark_1;
  AbstractEncoder.prototype.beginCollection_1 = Encoder.prototype.beginCollection_1;
  AbstractEncoder.prototype.encodeSerializableValue_1 = Encoder.prototype.encodeSerializableValue_1;
  AbstractEncoder.prototype.encodeNullableSerializableValue_1 = Encoder.prototype.encodeNullableSerializableValue_1;
  AbstractEncoder.prototype.shouldEncodeElementDefault_1 = CompositeEncoder.prototype.shouldEncodeElementDefault_1;
  ListLikeDescriptor.prototype._get_serialName__17 = SerialDescriptor.prototype._get_serialName__17;
  ListLikeDescriptor.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  ListLikeDescriptor.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  PrimitiveArrayDescriptor.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  PrimitiveArrayDescriptor.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  LinkedHashSetClassDesc.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  LinkedHashSetClassDesc.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  ArrayListClassDesc.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  ArrayListClassDesc.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  HashSetClassDesc.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  HashSetClassDesc.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  MapLikeDescriptor.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  MapLikeDescriptor.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  HashMapClassDesc.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  HashMapClassDesc.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  LinkedHashMapClassDesc.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  LinkedHashMapClassDesc.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  ArrayClassDesc.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  ArrayClassDesc.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  AbstractCollectionSerializer.prototype._get_descriptor__57 = KSerializer.prototype._get_descriptor__57;
  PluginGeneratedSerialDescriptor.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  PluginGeneratedSerialDescriptor.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  InlineClassDescriptor.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  _no_name_provided__43.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  PrimitiveSerialDescriptor_0.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  PrimitiveSerialDescriptor_0.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  TaggedDecoder.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  TaggedDecoder.prototype.decodeSerializableValue_16 = Decoder.prototype.decodeSerializableValue_16;
  TaggedDecoder.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  TaggedDecoder.prototype.decodeElementIndex_8 = CompositeDecoder.prototype.decodeElementIndex_8;
  TaggedDecoder.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  NamedValueDecoder.prototype.decodeSerializableValue_16 = Decoder.prototype.decodeSerializableValue_16;
  NamedValueDecoder.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  NamedValueDecoder.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  NamedValueDecoder.prototype.decodeElementIndex_8 = CompositeDecoder.prototype.decodeElementIndex_8;
  NamedValueDecoder.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  KeyValueSerializer.prototype._get_descriptor__57 = KSerializer.prototype._get_descriptor__57;
  _no_name_provided__61.prototype._get_isNullable__17 = SerialDescriptor.prototype._get_isNullable__17;
  _no_name_provided__61.prototype._get_isInline__17 = SerialDescriptor.prototype._get_isInline__17;
  PolymorphismValidator.prototype.contextual_2 = SerializersModuleCollector.prototype.contextual_2;
  StreamingJsonDecoder.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  StreamingJsonDecoder.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  StreamingJsonDecoder.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  JsonDecoderForUnsignedTypes.prototype.decodeSerializableValue_16 = Decoder.prototype.decodeSerializableValue_16;
  JsonDecoderForUnsignedTypes.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  JsonDecoderForUnsignedTypes.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  JsonDecoderForUnsignedTypes.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  StreamingJsonEncoder.prototype.encodeNotNullMark_1 = Encoder.prototype.encodeNotNullMark_1;
  StreamingJsonEncoder.prototype.beginCollection_1 = Encoder.prototype.beginCollection_1;
  StreamingJsonEncoder.prototype.encodeNullableSerializableValue_1 = Encoder.prototype.encodeNullableSerializableValue_1;
  AbstractJsonTreeDecoder.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  AbstractJsonTreeDecoder.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  AbstractJsonTreeDecoder.prototype.decodeElementIndex_8 = CompositeDecoder.prototype.decodeElementIndex_8;
  AbstractJsonTreeDecoder.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  JsonTreeDecoder.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  JsonTreeDecoder.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  JsonTreeDecoder.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  JsonTreeListDecoder.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  JsonTreeListDecoder.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  JsonTreeListDecoder.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  JsonTreeMapDecoder.prototype.decodeSerializableElement$default_8 = CompositeDecoder.prototype.decodeSerializableElement$default_8;
  JsonTreeMapDecoder.prototype.decodeSequentially_8 = CompositeDecoder.prototype.decodeSequentially_8;
  JsonTreeMapDecoder.prototype.decodeCollectionSize_8 = CompositeDecoder.prototype.decodeCollectionSize_8;
  $serializer.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  $serializer_0.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  $serializer_1.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  Logger.prototype.w$default_0 = ILogger.prototype.w$default_0;
  $serializer_2.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  $serializer_3.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  $serializer_4.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  $serializer_5.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  $serializer_6.prototype.typeParametersSerializers_8 = GeneratedSerializer.prototype.typeParametersSerializers_8;
  output = output$init$();
  functionClasses = functionClasses$init$();
  REPLACEMENT_BYTE_SEQUENCE = REPLACEMENT_BYTE_SEQUENCE$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  propertyRefClassMetadataCache = propertyRefClassMetadataCache$init$();
  EMPTY_DESCRIPTOR_ARRAY = EMPTY_DESCRIPTOR_ARRAY$init$();
  EMPTY_SERIALIZER_ARRAY = EMPTY_SERIALIZER_ARRAY$init$();
  BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance()._get_stringClass_(), serializer_1(StringCompanionObject_getInstance())), to(getKClass_0(Char), serializer_2(Companion_getInstance_9())), to(PrimitiveClasses_getInstance()._get_charArrayClass_(), CharArraySerializer()), to(PrimitiveClasses_getInstance()._get_doubleClass_(), serializer_3(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_doubleArrayClass_(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance()._get_floatClass_(), serializer_4(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_floatArrayClass_(), FloatArraySerializer()), to(getKClass_0(Long), serializer_5(Companion_getInstance_11())), to(PrimitiveClasses_getInstance()._get_longArrayClass_(), LongArraySerializer()), to(PrimitiveClasses_getInstance()._get_intClass_(), serializer_6(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_intArrayClass_(), IntArraySerializer()), to(PrimitiveClasses_getInstance()._get_shortClass_(), serializer_7(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_shortArrayClass_(), ShortArraySerializer()), to(PrimitiveClasses_getInstance()._get_byteClass_(), serializer_8(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_byteArrayClass_(), ByteArraySerializer()), to(PrimitiveClasses_getInstance()._get_booleanClass_(), serializer_9(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance()._get_booleanArrayClass_(), BooleanArraySerializer()), to(getKClass_0(Unit), serializer_10(Unit_getInstance()))]);
  NULL = new Object();
  EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap());
  JsonAlternativeNamesKey = new Key();
  unsignedNumberDescriptors = setOf([serializer_11(Companion_getInstance_4())._get_descriptor__57(), serializer_12(Companion_getInstance_5())._get_descriptor__57(), serializer_13(Companion_getInstance_3())._get_descriptor__57(), serializer_14(Companion_getInstance_6())._get_descriptor__57()]);
  ESCAPE_STRINGS = ESCAPE_STRINGS$init$();
  format = Json$default(null, _no_name_provided_$factory_53(), 1, null);
  engine = new EvaluationEngineImpl();
  _.evaluate = evaluate;
  return _;
}));

Blockly.Blocks['move'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("move")
          .appendField(new Blockly.FieldDropdown([["forward","FORWARD"], ["backward","BACKWARD"], ["option","OPTIONNAME"]]), "direction")
          .appendField("by")
          .appendField(new Blockly.FieldNumber(0), "magnitude");
      this.setColour(105);
   this.setTooltip("add a number here");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['move'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_magnitude = block.getFieldValue('magnitude');
  var code = '...;\n';
  return code;
};
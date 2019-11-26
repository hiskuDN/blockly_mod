// Turn block definition
Blockly.Blocks['turn_mod'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("turn")
    .appendField(new Blockly.FieldDropdown([["left","LEFT"], ["right","RIGHT"]]), "direction");
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['turn_mod'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var code = '...;\n';
  return code;
};
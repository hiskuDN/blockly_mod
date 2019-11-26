// Path block definition
Blockly.Blocks['path_mod'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("path")
    .appendField(new Blockly.FieldDropdown([["ahead","AHEAD"], ["to the left","LEFT"], ["to the right","RIGHT"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['path_mod'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var code = '...;\n';
  return code;
};
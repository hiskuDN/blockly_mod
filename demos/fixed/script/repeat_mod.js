// Repeat block definition
Blockly.Blocks['repeat_mod'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("repeat")
    .appendField(new Blockly.FieldNumber(5), "NAME")
    .appendField("times");
    this.appendStatementInput("NAME")
    .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("Please enter a number");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['repeat_mod'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = '...;\n';
  return code;
};

// Repeat block definition
Blockly.Blocks['repeat_mod'] = {
    init: function() {
      this.appendStatementInput("NAME")
          .setCheck(null)
          .appendField("repeat")
          .appendField(new Blockly.FieldNumber(5), "NAME")
          .appendField("times");
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


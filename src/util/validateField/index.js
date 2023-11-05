/**
 * 验证多个字段的函数。
 *
 * @param {Object} fields - 包含多个字段值的对象。
 * @param {Object} validationRules - 包含字段的验证规则的对象。
 * @param {function} callback - 验证完成后的回调函数。
 * @returns {void}
 */
// validateFields.js
export function validateField(fields, validationRules, callback) {
  if (typeof fields !== "object") {
    console.error("字段必须是一个对象");
    return;
  }

  if (typeof validationRules !== "object") {
    console.error("验证规则必须是一个对象");
    return;
  }

  if (typeof callback !== "function") {
    console.error("回调函数必须是一个函数");
    return;
  }

  const errors = {};

  for (const fieldName in fields) {
    if (fieldName in validationRules) {
      const fieldValue = fields[fieldName];
      const options = validationRules[fieldName];

      if (options.required && fieldValue === "") {
        errors[fieldName] = "字段不能为空";
      }

      if (
        options.minLength !== undefined &&
        fieldValue.length < options.minLength
      ) {
        errors[fieldName] = `字段长度必须至少为 ${options.minLength} 个字符`;
      }

      if (
        options.maxLength !== undefined &&
        fieldValue.length > options.maxLength
      ) {
        errors[fieldName] = `字段长度不能超过 ${options.maxLength} 个字符`;
      }

      if (
        options.pattern instanceof RegExp &&
        !options.pattern.test(fieldValue)
      ) {
        errors[fieldName] = "字段格式不正确";
      }

      if (
        options.length !== undefined &&
        fieldValue.length !== options.length
      ) {
        errors[fieldName] = `字段长度必须为 ${options.length} 个字符`;
      }
    }
  }

  if (Object.keys(errors).length === 0) {
    callback(null);
  } else {
    callback(errors);
  }
}

// 示例
// const fields = {
//   username: "example",
//   email: "example@example.com",
// };

// const validationRules = {
//   username: {
//     required: true,
//     minLength: 5,
//   },
//   email: {
//     required: true,
//     pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//   },
// };

// function validationCallback(errors) {
//   if (errors) {
//     console.error("Validation failed:", errors);
//   } else {
//     console.log("Validation passed");
//   }
// }

// validateField(fields, validationRules, validationCallback);

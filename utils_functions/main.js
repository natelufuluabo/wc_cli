export function executeCommand(options) {
    if (options.count_words) {
        console.log('Executing count_words function');
        // Call the function related to count_words
    } else if (options.count_bytes) {
        console.log('Executing count_bytes function');
        // Call the function related to count_bytes
    } else if (options.count_lines) {
        console.log('Executing count_lines function');
        // Call the function related to count_lines
    } else {
        console.log('Executing count_bytes, count_words and count_lines functions')
    }
}
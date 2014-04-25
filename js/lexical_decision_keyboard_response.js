// Inter Trial Interval
var ITI = 500 
var number_of_trials = 40

// pages to send results to
var user_data_address = '../save_UserData.php' 
var data_address = '../save_data.php' 

// hidden box with forms which gets filled with data
var logging_box_ids = new Array('paradigmBox', 'timeBox', 'subjectBox', 'trialBox', 'stimuliBox', 'probeBox', 'codeBox', 'responseBox', 'rtBox');
var variables_to_log = new Array('paradigm', 'experiment_start_time', 'subject_nr', 'trial_number', 'stimuli_number', 'probe', 'code', 'response', 'rt');

// DEBUG stuff
var debug_mode = true // Set as true to show extra information, false to run experiment normally.
var error_feedback = false

// variables to log
var paradigm = 'press_key';
var experiment_start_time = Date();
var subject_nr = Math.floor(Math.random() * 99999999) + 1; // Pick a random number between 1 and 99999999
var trial_number = 0;
var stimuli_number
var probe
var code
var response
var rt

// Do not change
var random_order = generate_random_list(number_of_trials);
var stim_number = random_order[trial_number];

// Experiment logic - Adjust this as needed
if(debug_mode){
    document.getElementById('hidden_div').style.display = 'Inline'
};

function trial_stage0() {
    stimuli_number = random_order[trial_number];
    probe = probes[stimuli_number];
    code = codes[stimuli_number];
    show_fixation(ITI);
    setTimeout("trial_stage1()", ITI);
};

function trial_stage1() {
    start_time = (Date.now());
    show_text(probe);
    get_keyboard_response('YN');
};

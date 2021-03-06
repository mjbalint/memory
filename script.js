function Piece (name, imagePath)
{
    this.name = name;
    this.imagePath = imagePath;
    this.isMatched = false;
}
Piece.prototype.getMatchString = function () {
    return (this.name);
};

function PieceList (name, description)
{
    this.name = name;
    this.description = description;
    this.pieces = [];
}
PieceList.prototype.initPieces = function (numGroups = 4, groupSize = 2)
{
    this.pieces = [];
};
PieceList.prototype.setBoard  = function ($boardDiv)
{
    // Clear any existing contents.
    $boardDiv.empty();

    for (var i = 0; i < this.pieces.length; i++) {
        $boardDiv.append('<div class="piece" id="' + i + '"></div>');
    }
}

var flagIdToName = {  
    'ad': 'Andorra',
    'ae': 'United Arab Emirates',
    'af': 'Afghanistan',
    'ag': 'Antigua and Barbuda',
    'ai': 'Anguilla',
    'al': 'Albania',
    'am': 'Armenia',
    'an': 'Netherlands Antilles',
    'ao': 'Angola',
    'ar': 'Argentina',
    'as': 'American Samoa',
    'at': 'Austria',
    'au': 'Australia',
    'aw': 'Aruba',
    'ax': 'Aland Islands',
    'ba': 'Bonia and Herzegovina',
    'bb': 'Barbados',
    'bd': 'Bangladesh',
    'be': 'Belgium',
    'bf': 'Burkina Faso',
    'bg': 'Bulgaria',
    'bh': 'Bahrain',
    'bi': 'Burundi',
    'bj': 'Benin',
    'bm': 'Bermuda',
    'bn': 'Brunei',
    'bo': 'Bolivia',
    'br': 'Brazil',
    'bs': 'Bahamas',
    'bt': 'Bhutan',
    'bw': 'Botswana',
    'by': 'Belarus',
    'bz': 'Belize',
    'ca': 'Canada',
    'cd': 'Democratic Republic of the Congo',
    'cf': 'Central African Republic',
    'cg': 'Congo',
    'ch': 'Switzerland',
    'ci': "Cote d'Ivoire",
    'ck': 'Cook Islands',
    'cl': 'Chile',
    'cm': 'Cameroon',
    'cn': 'China',
    'co': 'Colombia',
    'cr': 'Costa Rica',
    'cu': 'Cuba',
    'cv': 'Cabo Verde',
    'cx': 'Christmas Island',
    'cy': 'Cyprus',
    'cz': 'Czech Republic',
    'de': 'Germany',
    'dj': 'Djibouti',
    'dk': 'Denmark',
    'dm': 'Dominica',
    'do': 'Dominican Republic',
    'dz': 'Algeria',
    'ec': 'Ecuador',
    'ee': 'Estonia',
    'eg': 'Egypt',
    'er': 'Eritrea',
    'es': 'Spain',
    'et': 'Ethiopia',
    'eu': 'European Union',
    'fi': 'Finland',
    'fj': 'Fiji',
    'fk': 'Falkland Islands',
    'fm': 'Federated States of Micronesia',
    'fo': 'Faroe Islands',
    'fr': 'France',
    'ga': 'Gabon',
    'gd': 'Grenada',
    'ge': 'Georgia',
    'gg': 'Guernsey',
    'gh': 'Ghana',
    'gi': 'Gibraltar',
    'gl': 'Greenland',
    'gm': 'Gambia',
    'gn': 'Guinea',
    'gq': 'Equatorial Guinea',
    'gr': 'Greece',
    'gr-cy': 'Greek Cyprus',
    'gs': 'South Georgia and the South Sandwich Islands',
    'gt': 'Guatemala',
    'gu': 'Guam',
    'gw': 'Guinea-Bissau',
    'gy': 'Guyana',
    'hk': 'Hong Kong',
    'hn': 'Heard Island and McDonald Islands',
    'hr': 'Croatia',
    'ht': 'Haiti',
    'hu': 'Hungary',
    'id': 'Indonesia',
    'ie': 'Ireland',
    'il': 'Israel',
    'im': 'Isle of Man',
    'in': 'India',
    'io': 'British Indian Ocean Territory',
    'iq': 'Iraq',
    'ir': 'Iran',
    'is': 'Iceland',
    'it': 'Italy',
    'je': 'Jersey',
    'jm': 'Jamaica',
    'jo': 'Jordan',
    'jp': 'Japan',
    'ke': 'Kenya',
    'kg': 'Kyrgyzstan',
    'kh': 'Cambodia',
    'ki': 'Kiribati',
    'km': 'Comoros',
    'kn': 'Saint Kitts and Nevis',
    'kp': 'North Korea',
    'kr': 'South Korea',
    'kw': 'Kuwait',
    'ky': 'Cayman Islands',
    'kz': 'Kazakhstan',
    'la': 'Laos',
    'lb': 'Lebanon',
    'lc': 'Saint Lucia',
    'li': 'Liechtenstein',
    'lk': 'Sri Lanka',
    'lr': 'Liberia',
    'ls': 'Lesotho',
    'lt': 'Lithuania',
    'lu': 'Luxembourg',
    'lv': 'Latvia',
    'ly': 'Libya',
    'ma': 'Morocco',
    'mc': 'Monaco',
    'md': 'Moldova',
    'me': 'Montenegro',
    'mg': 'Madagascar',
    'mh': 'Marshall Islands',
    'ml': 'Mali',
    'mn': 'Mongolia',
    'mo': 'Macao',
    'mp': 'Northern Mariana Islands',
    'mq': 'Martinique',
    'mr': 'Mauritania',
    'ms': 'Montserrat',
    'mt': 'Malta',
    'mu': 'Mauritius',
    'mv': 'Maldives',
    'mw': 'Malawi',
    'mx': 'Mexico',
    'my': 'Malaysia',
    'mz': 'Mozambique',
    'na': 'Namibia',
    'ne': 'Niger',
    'nf': 'Norfolk Island',
    'ng': 'Nigeria',
    'ni': 'Nicaragua',
    'nl': 'Netherlands',
    'no': 'Norway',
    'np': 'Nepal',
    'nr': 'Nauru',
    'nu': 'Niue',
    'nz': 'New Zealand',
    'om': 'Oman',
    'pa': 'Panama',
    'pf': 'French Polynesia',
    'pg': 'Papua New Guinea',
    'ph': 'Philippines',
    'pk': 'Pakistan',
    'pl': 'Poland',
    'pm': 'Saint Pierre and Miquelon',
    'pn': 'Pitcairn',
    'pr': 'Puerto Rico',
    'pt': 'Portugal',
    'pw': 'Palau',
    'py': 'Paraguay',
    'qa': 'Qatar',
    'ro': 'Romania',
    'rs': 'Serbia',
    'ru': 'Russia',
    'rw': 'Rwanda',
    'sa': 'Saudi Arabia',
    'sb': 'Solomon Islands',
    'sc': 'Seychelles',
    'sd': 'Sudan',
    'se': 'Sweden',
    'sg': 'Singapore',
    'sh': 'Saint Helena, Ascension and Tristan da Cunha',
    'si': 'Slovenia',
    'sk': 'Slovakia',
    'sl': 'Sierra Leone',
    'sm': 'San Marino',
    'sn': 'Senegal',
    'so': 'Somalia',
    'sr': 'Suriname',
    'st': 'Sao Tome and Principe',
    'sv': 'El Salvador',
    'sy': 'Syria',
    'sz': 'Swaziland',
    'tc': 'Turks and Caicos Islands',
    'td': 'Chad',
    'tg': 'Togo',
    'th': 'Thailand',
    'tj': 'Tajikistan',
    'tl': 'Timor-Leste',
    'tm': 'Turkmenistan',
    'tn': 'Tunisia',
    'to': 'Tonga',
    'tr': 'Turkey',
    'tt': 'Trinidad and Tobago',
    'tv': 'Tuvalu',
    'tw': 'Taiwan',
    'tz': 'Tanzania',
    'ua': 'Ukraine',
    'ug': 'Uganda',
    'uk': 'United Kingdom',
    'us': 'United States of America',
    'uy': 'Uruguay',
    'uz': 'Uzbekistan',
    'vc': 'Saint Vincent and the Grenadines',
    've': 'Venezuela',
    'vg': 'British Virgin Islands',
    'vi': 'U.S. Virgin Islands',
    'vn': 'Vietnam',
    'vu': 'Vanuatu',
    'wf': 'Wallis and Futuna',
    'ws': 'Samoa',
    'ye': 'Yemen',
    'yt': 'Mayotte',
    'za': 'South Africa',
    'zm': 'Zambia',
    'zw': 'Zimbabwe',
};

var flagIds = [];
var populateFlagIds = function ()
{
    for (var flagId in flagIdToName) {
       flagIds.push(flagId);
    }
}

var getRandomFlag = function ()
{
    var pos = Math.floor(Math.random() * flagIds.length);
    var flagId = flagIds[pos]; 

    return (flagId);
};

function FlagPiece (flagId)
{
    this.name = flagIdToName[flagId];
    this.imagePath = 'img/flag/' + flagId + '.png'; 
}
FlagPiece.prototype = new Piece();
FlagPiece.prototype.getMatchString = function () {
    return ('the flag of ' + this.name);
};

function FlagPieceList ()
{
    this.name = 'flags';
    this.description = 'Flags of the world';
}
FlagPieceList.prototype = new PieceList();
FlagPieceList.prototype.initPieces = function (numGroups = 4, groupSize = 2)
{
    /*
     * Choose the flag to use for each group and then assign a random
     * order to each member of the group.
     *
     * We allow duplicates, which simplifies our bounds checking since
     * we don't need to worry about the number of groups being greater 
     * than the number of image choices.
     */
    var orderToFlagId = {};
    for (var i = 0; i < numGroups; i++) {
        var flagId = getRandomFlag();

        for (var j = 0; j < groupSize; j++) {
            do {
                var order = Math.random()

                /*
                 * It is unlikely that we will get identical random
                 * numbers, but we will check just in case.
                 */
                if (! orderToFlagId.hasOwnProperty(order)) {
                    orderToFlagId[order] = flagId;
                    break;
                }
            } while (true);
        }
    }

    /*
     * Sort the order keys
     */
    var orderList = [];
    for (var order in orderToFlagId) {
        orderList.push(order);
    }
    orderList.sort();

    /*
     * Now we can go ahead and create the pieces. 
     */
    this.pieces = [];
    for (var i = 0; i < orderList.length; i++) {
        var order = orderList[i];
        var flagId = orderToFlagId[order];
        this.pieces.push(new FlagPiece(flagId));
    }
}

var clickCount = 0;
var prevPieceIndex = -1; 
var boardPieces = null;
var numGroups = 4;

// Set up the board
var setBoard = function ()
{
    boardPieces = new FlagPieceList();
    boardPieces.initPieces(numGroups);
    boardPieces.setBoard($('#board'));
    $('#match_table').empty();

    // When a piece is clicked, we select it and match it against the
    // previous selection.
    $('.piece').click(function() {
        var pieceIndex = $(this).attr('id');
        var piece = boardPieces.pieces[pieceIndex];

        // Ignore clicks on already matched pieces.
        if (piece.isMatched) {
            return;
        }

        // A second click on the same unmatched piece clears the selection.
        if (prevPieceIndex === pieceIndex) {
            // A second click clears the selection.
            $(this).css('background-image', 'none');
            prevPieceIndex = -1;
            return;
        }

        // Reveal this piece's picture.
        $(this).css('background-image', 'url(' + piece.imagePath + ')');

        // Compare this piece to the previous one to see how to proceed.
        if (prevPieceIndex < 0) {
            // Nothing already selected
            prevPieceIndex = pieceIndex;
        } else {
            prevPiece = boardPieces.pieces[prevPieceIndex];

            if (prevPiece.name === piece.name) {
                // Match!
                prevPiece.isMatched = true;
                piece.isMatched = true;
                var matchImg = '<img class="matchImg" src="' +
                             piece.imagePath +
                             '" />';
                var matchDescription ="<p>You found " +
                                       piece.getMatchString() +
                                       "!</p>";
                $('#match_table').append(
                    '<tr>' + 
                        '<td>' + matchImg + '</td>' +
                        '<td>' + matchDescription + '</td>' +
                    '</tr>');
                prevPieceIndex = -1;
            } else {
                // No match. Hide the previous piece and remember this one. 
                $('#' + prevPieceIndex).css('background-image', 'none');
                prevPieceIndex = pieceIndex;
            }
        }
    });

    $('#reset').click(function() {
        setBoard();
    });

    $('#scale').change(function(){
        var val = parseInt($(this).val());
        var scale = Math.pow(2, val+4);
        $('.piece').css({'height': scale + 'px'});
        $('.piece').css({'width': scale + 'px'});
    });

    $('#groups').change(function(){
        numGroups = parseInt($(this).val());
        setBoard();
    });
};

// Initialize web page 
$(document).ready(function(){
    // Prepare the pieces.
    populateFlagIds();
    setBoard();
    $('#scale').val(3);
    $('#groups').val(4);
});

/**
* Rhyme
* @namespace songrhyme.rhyme.services
*/
(function () {
  'use strict';

  angular
    .module('songrhyme.rhyme.services')
    .factory('Rhyme', Rhyme);

  Rhyme.$inject = ['$cookies', '$http'];

  /**
  * @namespace Rhyme
  * @returns {Factory}
  */
  function Rhyme($cookies, $http) {
    /**
    * @name Rhyme
    * @desc The Factory to be returned
    */
    var Rhyme = {
      ps_for_word: ps_for_word,
      rhymes_for_ps: rhymes_for_ps,
    };

    return Rhyme;

    ////////////////////

    /**
    * @name ps_for_word
    * @desc get ps for the word entered by user
    * @param {string} word The word entered by the user
    * @returns {Promise}
    * @memberOf songrhyme.rhyme.services.Rhyme
    */
    function ps_for_word(word) {
      return $http.get('/api/rhyme/ps_for_word/' + word + '/', {
        }).then(wordSuccessFn, wordErrorFn);

      /**
      * @name wordSuccessFn
      * @desc Get rhymes
      */
      function wordSuccessFn(data, status, headers, config) {
        Rhyme.rhymes_for_ps(data.ps);
      }

      /**
      * @name wordErrorFn
      * @desc Log "Epic failure!" to the console
      */
      function wordErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }

    /**
    * @name rhymes for ps
    * @desc get list of rhymes for a phoneme sequence
    * @param {string} ps The ps for the word entered by the user
    * @returns {Promise}
    * @memberOf songrhyme.rhyme.services.Rhyme
    */
    function rhymes_for_ps(ps) {
      return $http.get('/api/rhyme/rhymes_for_ps/' + ps + '/', {
        }).then(wordSuccessFn, wordErrorFn);

      /**
      * @name wordSuccessFn
      * @desc Get rhymes
      */
      function wordSuccessFn(data, status, headers, config) {
        
      }

      /**
      * @name wordErrorFn
      * @desc Log "Epic failure!" to the console
      */
      function wordErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }

  }
})();
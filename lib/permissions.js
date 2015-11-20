/**
 * Created by tx-0020 on 15/11/20.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}